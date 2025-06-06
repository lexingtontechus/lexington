"use client";
import ContactForm from "./contactform";
export default function Contact() {
  return (
    <main>
      <div className="hero min-h-[300px] text-wrap">
        <div className="hero-overlay svg-contact"></div>
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
              Contact Us
            </h1>
            <p className="mb-5 text-3xl font-semibold uppercase text-accent-content">
              Technology transformation for business sustainability.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16 container mx-auto text-center px-4">
        <h4 className="text-2xl font-semibold">Want to work with us?</h4>
        <p className="leading-relaxed mt-1 mb-4">
          Reach out and we will get back to you in 1-2 business days.
        </p>
        <div className="max-w-lg mx-auto text-left">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
