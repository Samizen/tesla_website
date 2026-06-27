"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import logo from "../../../assets/logos/Tesla_horizontal_svg.svg";
import { getSearchResults, searchItems, type SearchItem } from "../search-data";

type SiteHeaderProps = {
  page: "home" | "offer";
};

export function SiteHeader({ page }: SiteHeaderProps) {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(page === "offer" ? "offer" : "home");
  const searchResults = useMemo(() => getSearchResults(query), [query]);

  useEffect(() => {
    if (page !== "home") return;

    const updateActiveSection = () => {
      const contact = document.getElementById("contact");
      const about = document.getElementById("about");

      if (contact && contact.getBoundingClientRect().top < window.innerHeight * 0.45) {
        setActiveSection("contact");
        return;
      }

      if (about && about.getBoundingClientRect().top < window.innerHeight * 0.45) {
        setActiveSection("about");
        return;
      }

      setActiveSection("home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [page]);

  function scrollToSearchItem(item: SearchItem) {
    const currentPath = window.location.pathname;

    if (item.href.startsWith("/#")) {
      if (currentPath !== "/") {
        window.location.href = item.href;
        return;
      }

      scrollToElement(item.href.slice(2));
      return;
    }

    if (item.href.startsWith("/what-we-offer")) {
      if (currentPath !== "/what-we-offer") {
        window.location.href = item.href;
        return;
      }

      const hash = item.href.split("#")[1];
      scrollToElement(hash || "offer-page-top", ".offer-page-hero");
      return;
    }

    window.location.href = item.href;
  }

  function scrollToElement(id: string, fallbackSelector?: string) {
    document.querySelectorAll(".search-hit").forEach((node) => node.classList.remove("search-hit"));
    window.getSelection()?.removeAllRanges();

    const match = document.getElementById(id) || (fallbackSelector ? document.querySelector(fallbackSelector) : null);

    if (match instanceof HTMLElement) {
      match.classList.add("search-hit");
      const rect = match.getBoundingClientRect();
      const top = rect.top + window.scrollY - window.innerHeight * 0.18;
      window.scrollTo({ top, behavior: "smooth" });
      setIsSearchOpen(false);
      window.setTimeout(() => match.classList.remove("search-hit"), 2200);
    }
  }

  function runSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fallback = page === "offer" ? searchItems.find((item) => item.href === "/what-we-offer") : searchItems[0];
    scrollToSearchItem(searchResults[0] || fallback || searchItems[0]);
  }

  return (
    <header className="site-header">
      <a className="brand" href={page === "home" ? "#home" : "/#home"} aria-label="Tesla Engineering home">
        <Image src={logo} alt="Tesla Engineering" />
      </a>
      <nav aria-label="Primary navigation">
        <a className={activeSection === "home" ? "active" : ""} href={page === "home" ? "#home" : "/#home"}>
          Home
        </a>
        <a className={page === "offer" ? "active" : ""} href="/what-we-offer">
          What We Offer
        </a>
        <a className={activeSection === "about" ? "active" : ""} href={page === "home" ? "#about" : "/#about"}>
          About Us
        </a>
        <a className={activeSection === "contact" ? "active" : ""} href={page === "home" ? "#contact" : "/#contact"}>
          Contact
        </a>
      </nav>
      <form className="search" onSubmit={runSearch} role="search">
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsSearchOpen(true);
          }}
          onFocus={() => setIsSearchOpen(true)}
          onBlur={() => window.setTimeout(() => setIsSearchOpen(false), 140)}
          placeholder="Search"
          aria-label="Find content on this page"
          aria-expanded={isSearchOpen && query.trim().length > 0}
          aria-controls={page === "home" ? "search-results" : "offer-search-results"}
        />
        <button type="submit" aria-label="Search page">
          <span>Go</span>
        </button>
        {isSearchOpen && query.trim().length > 0 && (
          <div className="search-results" id={page === "home" ? "search-results" : "offer-search-results"}>
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => scrollToSearchItem(item)}
                >
                  <strong>{item.title}</strong>
                  <span>{item.snippet}</span>
                </button>
              ))
            ) : (
              <p>No matching section</p>
            )}
          </div>
        )}
      </form>
    </header>
  );
}
