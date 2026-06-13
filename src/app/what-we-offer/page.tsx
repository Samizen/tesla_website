"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import logo from "../../../assets/logos/Tesla_horizontal_svg.svg";
import footerEmailIcon from "../../../assets/footer_email_icon.svg";
import footerTelegramIcon from "../../../assets/footer_telegram_icon.svg";
import footerWhatsappIcon from "../../../assets/footer_whatsapp_icon.svg";
import contactIllustration from "../../../assets/contact_us_illustration.png";
import heroImage from "../../../assets/what_we_offer_hero.png";
import { offerServices } from "../offer-data";

export default function WhatWeOfferPage() {
  const [query, setQuery] = useState("");
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});

  const filteredServices = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return offerServices;

    return offerServices.filter((service) =>
      `${service.title} ${service.body} ${service.tags.join(" ")}`.toLowerCase().includes(needle),
    );
  }, [query]);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`What We Offer Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`);
    window.location.href = `mailto:info@teslaengineering.com.np?subject=${subject}&body=${body}`;
  }

  function runSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = filteredServices[0];
    if (!target) return;
    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function moveImage(serviceId: string, count: number, direction: number) {
    setActiveImages((current) => ({
      ...current,
      [serviceId]: ((current[serviceId] || 0) + direction + count) % count,
    }));
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/#home" aria-label="Tesla Engineering home">
          <Image src={logo} alt="Tesla Engineering" priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/#home">Home</a>
          <a className="active" href="/what-we-offer">What We Offer</a>
          <a href="/#about">About Us</a>
          <a href="/#contact">Contact</a>
        </nav>
        <form className="search" onSubmit={runSearch} role="search">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            aria-label="Find content on this page"
          />
          <button type="submit" aria-label="Search page">
            <span>Go</span>
          </button>
        </form>
      </header>

      <section className="offer-page-hero">
        <Image
          className="offer-page-hero-image"
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={78}
        />
        <div className="offer-page-hero-copy">
          <h1>What We Offer</h1>
          <p>
            From concept to construction administration, our remote structural engineering team delivers precision,
            speed, and code-compliant designs across California and beyond.
          </p>
        </div>
      </section>

      <section className="offer-page-services" aria-label="Service navigation">
        <div className="offer-page-service-nav">
          {offerServices.map((service) => (
            <a key={service.id} href={`#${service.id}`}>
              {service.title}
            </a>
          ))}
        </div>

        <div className="offer-page-service-list">
          {filteredServices.map((service) => {
            const activeImage = activeImages[service.id] || 0;

            return (
              <article className="offer-page-service" id={service.id} key={service.id}>
                <div className="service-media">
                  <Image
                    src={service.images[activeImage]}
                    alt={service.title}
                    loading="lazy"
                    sizes="(max-width: 980px) 100vw, 50vw"
                    quality={72}
                  />
                  <button
                    className="service-media-prev"
                    type="button"
                    onClick={() => moveImage(service.id, service.images.length, -1)}
                    aria-label={`Previous image for ${service.title}`}
                  >
                    &lt;
                  </button>
                  <button
                    className="service-media-next"
                    type="button"
                    onClick={() => moveImage(service.id, service.images.length, 1)}
                    aria-label={`Next image for ${service.title}`}
                  >
                    &gt;
                  </button>
                  <div className="service-media-dots" aria-hidden="true">
                    {service.images.map((image, index) => (
                      <span className={activeImage === index ? "active" : ""} key={`${service.id}-${index}-${image.src}`} />
                    ))}
                  </div>
                </div>
                <div className="service-detail">
                  <h2>{service.title}</h2>
                  <p>{service.body}</p>
                  <ul>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="contact section-pad" data-search>
        <div className="contact-panel">
          <form className="contact-form" onSubmit={submitContact}>
            <h2>Contact Us</h2>
            <p>We&apos;d love to hear from you.</p>
            <label>
              <span>Name</span>
              <input name="name" type="text" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" required />
            </label>
            <label>
              <span>Your Company</span>
              <input name="company" type="text" />
            </label>
            <label>
              <span>Your Message</span>
              <textarea name="message" rows={6} required />
            </label>
            <button type="submit">Submit</button>
          </form>
          <div className="contact-copy">
            <Image src={contactIllustration} alt="Structural engineering consultation illustration" />
          </div>
        </div>
      </section>

      <footer className="footer" data-search>
        <a className="footer-brand" href="/#home" aria-label="Tesla Engineering home">
          <Image src={logo} alt="Tesla Engineering" />
        </a>
        <div className="footer-contact">
          <h2>Contact</h2>
          <a href="mailto:info@teslaengineering.com.np">info@teslaengineering.com.np</a>
          <a href="mailto:sojha@teslaengineering.com.np">sojha@teslaengineering.com.np</a>
          <div className="footer-socials" aria-label="Contact links">
            <a href="https://wa.me/9779863329963" target="_blank" rel="noreferrer" aria-label="Contact Tesla Engineering on WhatsApp">
              <Image src={footerWhatsappIcon} alt="" />
            </a>
            <a href="mailto:info@teslaengineering.com.np" aria-label="Email Tesla Engineering">
              <Image src={footerEmailIcon} alt="" />
            </a>
            <a href="https://t.me/teslaengineering" target="_blank" rel="noreferrer" aria-label="Contact Tesla Engineering on Telegram">
              <Image src={footerTelegramIcon} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
