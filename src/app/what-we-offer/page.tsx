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
import concreteOne from "../../../images/Concrete Podium 1.png";
import concreteTwo from "../../../images/Concrete Podium 2.png";
import concreteThree from "../../../images/Concrete Podium 3.png";
import concreteFour from "../../../images/Concrete Podium 4.png";
import concreteFive from "../../../images/Concrete Podium 5.png";
import woodOne from "../../../images/Wood 1.png";
import woodTwo from "../../../images/Wood 2.png";
import woodThree from "../../../images/Wood 3.png";
import woodFour from "../../../images/Wood 4.png";
import steelOne from "../../../images/Steel1.png";
import steelTwo from "../../../images/Steel2.png";
import steelThree from "../../../images/Steel3.png";
import steelFour from "../../../images/Steel4.png";
import retrofitOne from "../../../images/Retrofit1.png";
import retrofitTwo from "../../../images/Retrofit2.png";
import retrofitThree from "../../../images/Retrofit3.png";
import draftingImage from "../../../assets/carousel_3.png";
import safeImage from "../../../assets/carousel_2.png";
import etabsImage from "../../../assets/carousel_1.png";

const offerServices = [
  {
    id: "concrete-podium",
    title: "Concrete Podium",
    body: "We deliver precision-engineered concrete podium structures for mixed-use, commercial, and residential developments. Our team handles full structural analysis, detailing, and coordination - from foundation to transfer slab - ensuring code-compliant, cost-efficient designs that integrate seamlessly with the floors above.",
    tags: ["Post-Tensioned Transfer Slabs", "Shear Walls", "Foundation Design", "CBC Compliance"],
    images: [concreteOne, concreteTwo, concreteThree, concreteFour, concreteFive],
  },
  {
    id: "wood-residential-commercial-units",
    title: "Wood Residential / Commercial Units",
    body: "From single-family homes to multi-story Type V commercial buildings, we provide complete structural engineering for wood-framed construction. Our services cover gravity and lateral system design, shear wall schedules, hold-down details, and diaphragm design - all tailored to California's demanding seismic and wind requirements.",
    tags: ["Type V Construction", "Shear Wall Schedules", "Gravity Systems", "Diaphragm Design", "Multi-Story Wood"],
    images: [woodOne, woodTwo, woodThree, woodFour],
  },
  {
    id: "steel-structures",
    title: "Steel Structures",
    body: "We specialize in design and detailing of all major steel lateral systems including Buckling-Restrained Braced Frames (BRBF), Special Concentrically Braced Frames (SCBF), Ordinary Concentrically Braced Frames (OCBF), and Special Moment Resisting Frames (SMRF). Our engineers optimize for performance, fabrication efficiency, and constructability.",
    tags: ["BRBF", "SCBF", "OCBF", "SMRF", "Connection Design", "AISC 360 / 341"],
    images: [steelOne, steelTwo, steelThree, steelFour],
  },
  {
    id: "non-structural-components",
    title: "Non-Structural Components",
    body: "Ensuring the seismic anchoring and bracing of electrical and mechanical equipment is critical for life-safety compliance. We provide anchorage calculations, bracing design, and coordination for HVAC units, electrical panels, piping, conduit, and other non-structural components per ASCE 7 and CBC requirements.",
    tags: ["HVAC Anchorage", "Electrical Panel Bracing", "ASCE 7 Chapter 13", "Seismic Anchorage", "MEP Coordination"],
    images: [safeImage, steelTwo, etabsImage],
  },
  {
    id: "seismic-retrofitting",
    title: "Seismic Retrofitting",
    body: "We assess and strengthen existing structures - wood, concrete, and steel - to meet modern seismic standards. Our retrofit services include soft-story retrofits, cripple wall bracing, concrete shear wall additions, and steel moment frame insertions. We prepare full permit-ready packages compliant with IEBC and CBC retrofit provisions.",
    tags: ["Soft-Story Retrofit", "Cripple Wall Bracing", "Concrete Retrofit", "Steel Retrofit", "IEBC Compliance"],
    images: [retrofitOne, retrofitTwo, retrofitThree],
  },
  {
    id: "complete-ca-help",
    title: "Complete CA Help",
    body: "We support project teams throughout the construction administration phase, managing Submittals and Requests for Information (RFIs) with speed and precision. Our engineers review shop drawings, respond to field questions, issue supplemental instructions, and track documentation - keeping projects moving and protecting structural intent on-site.",
    tags: ["Submittal Review", "RFI Response", "Shop Drawing Review", "Field Support", "Construction Admin"],
    images: [concreteFive, safeImage, draftingImage],
  },
  {
    id: "reinforced-concrete-block-masonry",
    title: "Reinforced Concrete Block Masonry",
    body: "We design and detail reinforced concrete masonry unit (CMU) structures for commercial, industrial, and residential applications. Our scope includes shear wall design, out-of-plane flexural analysis, lintel and bond beam detailing, and full compliance with TMS 402/602 and CBC masonry provisions - delivering durable, cost-effective lateral and gravity systems.",
    tags: ["CMU Shear Walls", "TMS 402/602", "Lintel Design", "Bond Beams", "Out-of-Plane Analysis", "CBC Masonry"],
    images: [concreteThree, concreteFour, concreteTwo],
  },
  {
    id: "structural-drafting",
    title: "Structural Drafting",
    body: "Our drafting team produces high-quality structural drawings using BIM platforms and markup-based workflows. We create coordinated structural models in Revit, produce construction document sets, and perform markup-based drafting for plan check corrections and addenda. Deliverables are precise, buildable, and fully coordinated with architectural and MEP disciplines.",
    tags: ["Revit BIM", "Markup Drafting", "Plan Check Corrections", "CD Sets", "3D Coordination"],
    images: [draftingImage, steelThree, etabsImage],
  },
];

const offerStats = [
  { value: "7+", label: "Core Services" },
  { value: "25+", label: "Projects Delivered" },
  { value: "24/7", label: "Availability" },
  { value: "250%", label: "Cost Savings" },
];

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
        <div className="offer-page-hero-copy">
          <h1>What We Offer</h1>
          <p>
            From concept to construction administration, our remote structural engineering team delivers precision,
            speed, and code-compliant designs across California and beyond.
          </p>
        </div>
        <Image src={heroImage} alt="Steel structure frame" priority />
      </section>

      <section className="offer-page-stats" aria-label="Service highlights">
        {offerStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
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
                  <Image src={service.images[activeImage]} alt={service.title} />
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
