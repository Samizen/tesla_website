"use client";

import Image from "next/image";
import type { CSSProperties, FormEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import heroBg from "../../assets/landing_page_background_image.jpg";
import processFlowBg from "../../assets/process_flow_bg.svg";
import whoBg from "../../assets/who_we_are_bg.png";
import contactIllustration from "../../assets/contact_us_illustration.png";
import logo from "../../assets/logos/Tesla_horizontal_svg.svg";
import gear from "../../assets/tesla_gear.svg";
import footerEmailIcon from "../../assets/footer_email_icon.svg";
import footerTelegramIcon from "../../assets/footer_telegram_icon.svg";
import footerWhatsappIcon from "../../assets/footer_whatsapp_icon.svg";
import clickIcon from "../../assets/click_icon.svg";
import { offerServices } from "./offer-data";
import { getSearchResults, searchItems, type SearchItem } from "./search-data";

const services = [
  {
    title: "Structural Calculations",
    items: ["Reinforced Concrete", "Cold Formed and Hot Rolled Steel", "Wood"],
  },
  {
    title: "Structural Analysis",
    items: ["Gravity", "Lateral"],
  },
  {
    title: "Shop Drawing Review",
    items: ["Submittals", "RFI's", "Complete CA Help"],
  },
  {
    title: "Structural Drafting",
    items: ["BIM", "Markups Based Drafting"],
  },
];

const processSteps = [
  {
    title: "Project Intake",
    body: "Receive information and Design criteria",
  },
  {
    title: "Kick Off Meeting",
    body: "Discuss inputs, project features, reference projects",
  },
  {
    title: "Quotation",
    body: "Provide a detailed of timeline, quote, available as package-based or hourly rates",
  },
  {
    title: "Project Execution",
    body: "Develop calculations, plans based on requirements and building codes",
  },
  {
    title: "Revision",
    body: "Update client's comments/redlines or address City/Plan Check comments",
  },
  {
    title: "Project Completion",
    body: "Deliver the final plans and calculations.",
  },
];

const whoCards = [
  {
    title: "Professional",
    body: "Our team is comprised of skilled and committed structural engineering professionals located in Kathmandu, Nepal. We are eager to collaborate with you on your upcoming structural engineering projects. With extensive expertise and a passion for excellence, we are dedicated to delivering high-quality results that meet your specific needs. Our team is equipped to handle a range of projects, and we take pride in our ability to provide efficient, cost-effective solutions. We are confident that we can provide the expertise and professionalism you need to achieve your goals.",
  },
  {
    title: "Dedicated",
    body: "Our team is dedicated to providing high-quality service, and we constantly strive for improvement. With a diligent work ethic and a commitment to excellence, we are always seeking to enhance our skills and knowledge to better serve our clients. You can rely on us to deliver exceptional results and exceed your expectations.",
  },
  {
    title: "Experienced",
    body: "Our team has a wealth of industry experience gained through successful completion of numerous outsourced structural engineering projects (25+). This experience has equipped us with the skills and expertise needed to deliver high-quality results that meet the unique needs of each project. You can rely on our team's extensive experience to ensure that your project is completed efficiently and to the highest standards of quality.",
  },
];

const chooseCards = [
  {
    title: "Delegate",
    body: "By entrusting us with the tedious and repetitive tasks such as modeling and calculations, you can focus on the conceptual planning that is crucial to the success of your project. Our team has the technical skills and experience needed to efficiently and accurately perform these tasks, freeing up your time and resources for more important work. With our support, you can ensure that all aspects of your project are meticulously executed, resulting in a successful outcome.",
  },
  {
    title: "Prolific",
    body: "By collaborating with our team, you can effectively double your productivity, as we work alongside you for a combined total of 80 hours per week. One of the biggest advantages of working with us is the time zone difference between PST and Kathmandu, which allows us to work while you're offline, ensuring that your project moves forward without delay. You can trust that our team will provide reliable and efficient support, delivering quality results that meet your specific project requirements.",
  },
  {
    title: "Competitive",
    body: "Partnering with us can give you a significant competitive advantage by enabling you to accomplish more and meet project deadlines. With our efficient workflows and collaborative approach, we can help you reduce project timelines and achieve your goals faster. Additionally, our cost-effective solutions can help you reduce project costs by 2.5-3 times, allowing you to allocate your resources more strategically.",
  },
];

const offerSlides = offerServices.map((service) => ({
  image: service.images[0],
  caption: service.title,
}));

const gearNumberAngles = [-90, -45, 0, 45, 90, 135];

export default function Home() {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedStep, setSelectedStep] = useState(0);
  const [hasUsedProcess, setHasUsedProcess] = useState(false);
  const [activeOfferSlide, setActiveOfferSlide] = useState(0);
  const [zoomedOfferSlide, setZoomedOfferSlide] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const gearShellRef = useRef<HTMLDivElement>(null);
  const gearWheelLockRef = useRef(false);
  const gearWheelDeltaRef = useRef(0);
  const selectedProcess = processSteps[selectedStep];

  const rotation = useMemo(() => selectedStep * -45, [selectedStep]);
  const counterRotation = useMemo(() => selectedStep * 45, [selectedStep]);
  const zoomedSlide = zoomedOfferSlide === null ? null : offerSlides[zoomedOfferSlide];
  const searchResults = useMemo(() => getSearchResults(query), [query]);

  function showPreviousOfferSlide() {
    setActiveOfferSlide((current) => (current - 1 + offerSlides.length) % offerSlides.length);
  }

  function showNextOfferSlide() {
    setActiveOfferSlide((current) => (current + 1) % offerSlides.length);
  }

  function openZoomedOfferSlide(index: number) {
    setActiveOfferSlide(index);
    setZoomScale(1);
    setZoomedOfferSlide(index);
  }

  function closeZoomedOfferSlide() {
    setZoomedOfferSlide(null);
    setZoomScale(1);
  }

  function changeZoomScale(amount: number) {
    setZoomScale((current) => Math.min(3, Math.max(1, Number((current + amount).toFixed(1)))));
  }

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const gearShell = gearShellRef.current;
    if (!gearShell) return;

    function handleGearWheel(event: globalThis.WheelEvent) {
      if (event.ctrlKey) return;

      event.preventDefault();

      if (gearWheelLockRef.current) return;

      gearWheelDeltaRef.current += event.deltaY;

      if (Math.abs(gearWheelDeltaRef.current) < 38) return;

      const direction = gearWheelDeltaRef.current > 0 ? 1 : -1;
      gearWheelDeltaRef.current = 0;
      gearWheelLockRef.current = true;
      setSelectedStep((current) => (current + direction + processSteps.length) % processSteps.length);
      setHasUsedProcess(true);

      window.setTimeout(() => {
        gearWheelLockRef.current = false;
      }, 560);
    }

    gearShell.addEventListener("wheel", handleGearWheel, { passive: false });

    return () => {
      gearShell.removeEventListener("wheel", handleGearWheel);
    };
  }, []);

  function scrollToSearchItem(item: SearchItem) {
    if (!item.href.startsWith("/#")) {
      window.location.href = item.href;
      return;
    }

    const id = item.href.slice(2);
    document.querySelectorAll(".search-hit").forEach((node) => node.classList.remove("search-hit"));
    window.getSelection()?.removeAllRanges();

    const match = document.getElementById(id);

    if (match) {
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
    const target = searchResults[0] || searchItems[0];
    scrollToSearchItem(target);
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Free Consultation Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:info@teslaengineering.com.np?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Tesla Engineering home">
          <Image src={logo} alt="Tesla Engineering" priority />
        </a>
        <nav aria-label="Primary navigation">
          <a className={activeSection === "home" ? "active" : ""} href="#home">Home</a>
          <a href="/what-we-offer">What We Offer</a>
          <a className={activeSection === "about" ? "active" : ""} href="#about">About Us</a>
          <a className={activeSection === "contact" ? "active" : ""} href="#contact">Contact</a>
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
            aria-controls="search-results"
          />
          <button type="submit" aria-label="Search page">
            <span>Go</span>
          </button>
          {isSearchOpen && query.trim().length > 0 && (
            <div className="search-results" id="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <button
                    key={item.id}
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

      <section
        id="home"
        className="hero"
        data-search
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <div className="hero-copy">
          <p className="eyebrow">Looking for Remote</p>
          <h1>Structural Engineers?</h1>
          <p className="hero-line">Don’t Worry.</p>
          <p className="hero-line">We’ve got you covered.</p>
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

      <section
        id="process"
        className="process section-pad"
        data-search
        style={{ backgroundImage: `url(${processFlowBg.src})` }}
      >
        <div className="process-copy">
          <h2>Our Process</h2>
          <p>Once We Establish Connection.</p>
        </div>
        <div className="process-flow" aria-label="Process overview">
          {processSteps.map((step) => (
            <article key={step.title} className={selectedProcess.title === step.title ? "active" : ""}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <div className="gear-stage">
          <div
            ref={gearShellRef}
            className="gear-shell"
            aria-label="Scroll over the gear to move through process steps"
          >
            <div className="gear-hole" aria-hidden="true" />
            <div className="gear-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
              <Image src={gear} alt="" />
              <div className="gear-numbers" aria-label="Process steps">
                {processSteps.map((step, index) => {
                  const angle = gearNumberAngles[index];
                  const radians = (angle * Math.PI) / 180;
                  const isSelected = selectedStep === index;
                  const radius = isSelected ? 41 : 60;

                  return (
                    <button
                      className={`gear-number ${isSelected ? "selected" : ""}`}
                      key={step.title}
                      style={{
                        left: `${50 + radius * Math.cos(radians)}%`,
                        top: `${50 + radius * Math.sin(radians)}%`,
                        transform: `translate(-50%, -50%) rotate(${counterRotation}deg)`,
                      }}
                      onClick={() => {
                        setSelectedStep(index);
                        setHasUsedProcess(true);
                      }}
                      aria-label={`Show ${step.title}`}
                      type="button"
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
              {!hasUsedProcess && selectedStep === 0 && (
                <span className="gear-click-hint" aria-hidden="true">
                  <Image src={clickIcon} alt="" />
                </span>
              )}
            </div>
            <div className="gear-content">
              <span>Step {selectedStep + 1}</span>
              <h3>{selectedProcess.title}</h3>
              <p>{selectedProcess.body}</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="about-band"
        style={{ "--about-bg": `url(${whoBg.src})` } as CSSProperties}
      >
        <section
          id="about"
          className="who section-pad"
          data-search
        >
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
        <div className="offer-carousel" aria-label="Structural engineering work samples">
          <div className="offer-carousel-track">
            {offerSlides.map((slide, index) => {
              const offset = (index - activeOfferSlide + offerSlides.length) % offerSlides.length;
              const position =
                offset === 0
                  ? "active"
                  : offset === 1
                    ? "next"
                    : offset === offerSlides.length - 1
                      ? "previous"
                      : "hidden";

              return (
                <button
                  className={`offer-slide ${position}`}
                  key={slide.caption}
                  type="button"
                  onClick={() => openZoomedOfferSlide(index)}
                  aria-label={`Zoom image: ${slide.caption}`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.caption}
                    loading={index === activeOfferSlide ? "eager" : "lazy"}
                    sizes="(max-width: 680px) 86vw, 62vw"
                    quality={72}
                  />
                  <span>{slide.caption}</span>
                </button>
              );
            })}
          </div>
          <div className="offer-carousel-controls" aria-label="Carousel controls">
            <button type="button" onClick={showPreviousOfferSlide} aria-label="Show previous image">
              &lt;
            </button>
            <div className="offer-dots" aria-label="Choose carousel image">
              {offerSlides.map((slide, index) => (
                <button
                  className={activeOfferSlide === index ? "active" : ""}
                  key={slide.caption}
                  type="button"
                  onClick={() => setActiveOfferSlide(index)}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
            <button type="button" onClick={showNextOfferSlide} aria-label="Show next image">
              &gt;
            </button>
          </div>
        </div>
        <p>
          Although we have the capability to handle a wide range of projects, there are several areas where our team has expertise which we would like to highlight. We support teams with <strong>concrete podiums, wood residential and commercial units, steel structures, non-structural components, seismic retrofitting, construction administration, reinforced concrete block masonry, and structural drafting.</strong> You can trust that our team has the knowledge and experience necessary to deliver outstanding results that meet your specific needs.
        </p>
      </section>

      {zoomedSlide && (
        <div className="image-zoom" role="dialog" aria-modal="true" aria-label={zoomedSlide.caption}>
          <button
            className="image-zoom-close"
            type="button"
            onClick={closeZoomedOfferSlide}
            aria-label="Close zoomed image"
          >
            Close
          </button>
          <div className="image-zoom-controls" aria-label="Image zoom controls">
            <button type="button" onClick={() => changeZoomScale(-0.25)} disabled={zoomScale <= 1}>
              -
            </button>
            <span>{Math.round(zoomScale * 100)}%</span>
            <button type="button" onClick={() => changeZoomScale(0.25)} disabled={zoomScale >= 3}>
              +
            </button>
            <button type="button" onClick={() => setZoomScale(1)} disabled={zoomScale === 1}>
              Reset
            </button>
          </div>
          <button
            className="image-zoom-backdrop"
            type="button"
            onClick={closeZoomedOfferSlide}
            aria-label="Close zoomed image"
          />
          <figure>
            <div className="image-zoom-frame">
              <Image
                src={zoomedSlide.image}
                alt={zoomedSlide.caption}
                sizes="92vw"
                quality={88}
                style={{ transform: `scale(${zoomScale})` }}
              />
            </div>
            <figcaption>{zoomedSlide.caption}</figcaption>
          </figure>
        </div>
      )}

      <section id="contact" className="contact section-pad" data-search>
        <div className="contact-panel">
          <form className="contact-form" onSubmit={submitContact}>
            <h2>Contact Us</h2>
            <p>For Free Consultation</p>
            <label>
              <span>Name</span>
              <input name="name" type="text" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" required />
            </label>
            <label>
              <span>Your Query</span>
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
