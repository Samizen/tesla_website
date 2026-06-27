import Image from "next/image";
import type { CSSProperties } from "react";
import footerEmailIcon from "../../../assets/footer_email_icon.svg";
import footerTelegramIcon from "../../../assets/footer_telegram_icon.svg";
import footerWhatsappIcon from "../../../assets/footer_whatsapp_icon.svg";
import logo from "../../../assets/logos/Tesla_horizontal_svg.svg";
import contactIllustration from "../../../assets/optimized/site/contact-us-illustration.webp";
import heroImage from "../../../assets/optimized/site/what-we-offer-hero.webp";
import processFlowBg from "../../../assets/process_flow_bg.svg";
import { ContactForm } from "../components/ContactForm";
import { ServiceMediaCarousel } from "../components/ServiceMediaCarousel";
import { SiteHeader } from "../components/SiteHeader";
import { offerServices } from "../offer-data";

export default function WhatWeOfferPage() {
  return (
    <main>
      <SiteHeader page="offer" />

      <section className="offer-page-hero" id="offer-page-top">
        <Image
          className="offer-page-hero-image"
          src={heroImage}
          alt=""
          fill
          priority
          fetchPriority="high"
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

      <section
        className="offer-page-services"
        aria-label="Service navigation"
        style={{ "--offer-page-lines": `url(${processFlowBg.src})` } as CSSProperties}
      >
        <div className="offer-page-service-nav">
          {offerServices.map((service) => (
            <a key={service.id} href={`#${service.id}`}>
              {service.title}
            </a>
          ))}
        </div>

        <div className="offer-page-service-list">
          {offerServices.map((service) => (
            <article className="offer-page-service" id={service.id} key={service.id}>
              <ServiceMediaCarousel title={service.title} images={service.images} imageFit={service.imageFit} />
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
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-pad" data-search>
        <div className="contact-panel">
          <ContactForm mode="offer" />
          <div className="contact-copy">
            <Image
              src={contactIllustration}
              alt="Structural engineering consultation illustration"
              sizes="(max-width: 980px) 90vw, 34vw"
            />
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
