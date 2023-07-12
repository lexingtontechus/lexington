"use client";
import ContactForm from "./contactform.js";

export default function Contact() {
  return (
    <main>
      <div className="hero min-h-screen svg-contact">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
              Diverse. Resilient. Sustainable.
            </h1>
            <p className="mb-5 text-2xl font-semibold">
              Your story starts with us.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16 container mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold ">What Can't Tech Do?</h2>
        <p className="text-lg leading-relaxed mt-4 mb-2">
          Technology transformation for business sustainability.
        </p>
        <h4 className="text-2xl font-semibold">Want to work with us?</h4>
        <p className="leading-relaxed mt-1 mb-4">
          Complete this form and we will get back to you in 1-2 business days.
        </p>
        <div className="max-w-lg mx-auto text-left">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
