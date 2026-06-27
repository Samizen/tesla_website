"use client";

import type { FormEvent } from "react";

type ContactFormProps = {
  mode: "home" | "offer";
};

export function ContactForm({ mode }: ContactFormProps) {
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const subject =
      mode === "offer"
        ? encodeURIComponent(`What We Offer Inquiry from ${name}`)
        : encodeURIComponent(`Free Consultation Request from ${name}`);
    const body =
      mode === "offer"
        ? encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`)
        : encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:info@teslaengineering.com.np?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submitContact}>
      <h2>Contact Us</h2>
      <p>{mode === "offer" ? "We'd love to hear from you." : "For Free Consultation"}</p>
      <label>
        <span>Name</span>
        <input name="name" type="text" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required />
      </label>
      {mode === "offer" && (
        <label>
          <span>Your Company</span>
          <input name="company" type="text" />
        </label>
      )}
      <label>
        <span>{mode === "offer" ? "Your Message" : "Your Query"}</span>
        <textarea name="message" rows={6} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
