import { motion } from "motion/react";
import { Zap, Sparkles, Rocket, TrendingUp, Sparkle } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Fast Communication",
      desc: "Instant communication for faster feedback and smoother project flow.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Premium-Level Execution",
      desc: "No generic templates. Every detail is crafted with precision and intention.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Future-Ready Visuals",
      desc: "Modern design systems built to feel ahead of current trends.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Conversion-Focused Strategy",
      desc: "Designs created to balance aesthetics, usability, trust, and business growth.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-brand-text/[0.02]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm mb-8">
            <Sparkle className="w-4 h-4 text-brand-emerald" />
            <span className="text-sm font-bold text-brand-text">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-brand-text leading-[1.1] max-w-4xl">
            Why High-Ticket Brands <br />
            Trust <span className="text-brand-emerald">Rafid Ayman</span>
          </h2>
          <p className="text-base md:text-lg text-brand-muted mt-6 max-w-2xl">
            In a world of generic creators, we stand out by delivering visuals that don't just look good—they represent authority and premium positioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[32px] border border-brand-border hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-emerald mb-8 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-brand-muted leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
