import Image from "next/image";
import type { CSSProperties } from "react";
import heroBg from "../../assets/optimized/site/landing-page-background.webp";
import whoBg from "../../assets/optimized/site/who-we-are-bg.webp";
import contactIllustration from "../../assets/optimized/site/contact-us-illustration.webp";
import logo from "../../assets/logos/Tesla_horizontal_svg.svg";
import footerEmailIcon from "../../assets/footer_email_icon.svg";
import footerTelegramIcon from "../../assets/footer_telegram_icon.svg";
import footerWhatsappIcon from "../../assets/footer_whatsapp_icon.svg";
import { ContactForm } from "./components/ContactForm";
import { OfferCarousel } from "./components/OfferCarousel";
import { ProcessSection } from "./components/ProcessSection";
import { SiteHeader } from "./components/SiteHeader";
import { chooseCards, services, whoCards } from "./home-data";
import { offerServices } from "./offer-data";

export default function Home() {
  return (
    <main>
      <SiteHeader page="home" />

      <section id="home" className="hero" data-search>
        <Image
          className="hero-bg"
          src={heroBg}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={78}
        />
        <div className="hero-copy">
          <p className="eyebrow">Looking for Remote</p>
          <h1>Structural Engineers?</h1>
          <p className="hero-line">Don&apos;t Worry.</p>
          <p className="hero-line">We&apos;ve got you covered.</p>
          <a className="primary-cta" href="#contact">Get a Free Consultation</a>
        </div>
        <div className="hero-bottom">
          <div className="solution-heading">
            <h2>Get the Best Structural Engineering Solutions!</h2>
            <p>Together, Anywhere</p>
          </div>
          <p className="solution-copy">
            We are proud to have a team of experienced and highly skilled engineers who have been serving clients remotely for the past 3 years. With over 10 years of experience in the industry, we have a deep understanding of international building codes, standards, and the latest technology to manage complex calculations and designs. Our commitment to delivering high-quality and cost-effective solutions has made us a trusted partner for structural engineering firms across the globe. Utilizing the leading-edge communication tools, we are able to collaborate with our clients to bring their vision to life, no matter where they are located.
          </p>
        </div>
      </section>

      <section className="intro section-pad" data-search>
        <div className="section-label">Why Choose Us?</div>
        <p>
          We are proud to have a team of experienced and highly skilled engineers who have been serving clients remotely for the past 3 years. With over 10 years of experience in the industry, we have a deep understanding of international building codes, standards, and the latest technology to manage complex calculations and designs. Our commitment to delivering high-quality and cost-effective solutions has made us a trusted partner for structural engineering firms across the globe. Utilizing the leading-edge communication tools, we are able to collaborate with our clients to bring their vision to life, no matter where they are located.
        </p>
      </section>

      <section className="stats" data-search aria-label="Company highlights">
        <div>
          <strong>250%</strong>
          <span>Cost Saved</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Productivity</span>
        </div>
        <div>
          <strong>25+</strong>
          <span>Project Completed</span>
        </div>
      </section>

      <section id="services" className="services section-pad" data-search>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title} tabIndex={0}>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="service-images" aria-hidden="true">
          {offerServices.slice(0, 3).map((service) => (
            <Image
              src={service.images[0]}
              alt=""
              key={service.id}
              sizes="(max-width: 680px) 32vw, 18vw"
              quality={60}
            />
          ))}
        </div>
      </section>

      <ProcessSection />

      <div className="about-band" style={{ "--about-bg": `url(${whoBg.src})` } as CSSProperties}>
        <section id="about" className="who section-pad" data-search>
          <h2>Who We Are?</h2>
          <div className="who-grid">
            {whoCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="choose" className="choose section-pad" data-search>
          <h2>Why Choose Us?</h2>
          <div className="choose-grid">
            {chooseCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section id="offer" className="offer section-pad" data-search>
        <h2>What We Offer?</h2>
        <OfferCarousel />
        <p>
          Although we have the capability to handle a wide range of projects, there are several areas where our team has expertise which we would like to highlight. We support teams with <strong>concrete podiums, wood residential and commercial units, steel structures, non-structural components, seismic retrofitting, construction administration, reinforced concrete block masonry, and structural drafting.</strong> You can trust that our team has the knowledge and experience necessary to deliver outstanding results that meet your specific needs.
        </p>
      </section>

      <section id="contact" className="contact section-pad" data-search>
        <div className="contact-panel">
          <ContactForm mode="home" />
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
        <a className="footer-brand" href="#home" aria-label="Tesla Engineering home">
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
