import { motion } from "motion/react";

export function Logos() {
  const logos = [
    "Linear",
    "Stripe",
    "Vercel",
    "Framer",
    "OpenAI",
    "Arc",
    "Replicate",
    "Retool"
  ];

  return (
    <section className="py-12 md:py-20 border-y border-brand-border/50 bg-white/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-12">
          Trusted by high-growth companies
        </p>

        <div className="marquee-container">
          <div className="marquee-content gap-12 md:gap-24 px-12">
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-display font-bold text-brand-muted/40 grayscale hover:grayscale-0 hover:text-brand-text transition-all cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
