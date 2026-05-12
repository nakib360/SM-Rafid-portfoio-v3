import { motion } from "motion/react";
import { Search, Compass, Palette, Send, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "Deep dive into your brand goals, audience, and market position.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Strategy",
    description: "Crafting a visual roadmap that aligns with your business objectives.",
    icon: <Compass className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Design Execution",
    description: "Polishing every pixel and ensuring enterprise-level visual standards.",
    icon: <Palette className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Final Delivery",
    description: "Handover of high-quality assets ready for multi-channel deployment.",
    icon: <Send className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600"
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-brand-emerald" />
            <span className="text-sm font-bold text-brand-text">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-brand-text mb-6">
            A Structured Path to Excellence
          </h2>
          <p className="text-base md:text-lg text-brand-muted max-w-2xl">
            We follow a rigorous design process to ensure every project meets the high standards of enterprise high-ticket brands.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop and mobile */}
          <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-px bg-brand-border lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex justify-start lg:justify-center pl-12 lg:px-12">
                  <div className={`max-w-md bg-white border border-brand-border p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand-emerald/5 transition-all w-full`}>
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${step.color} shadow-sm`}>
                        {step.icon}
                      </div>
                      <span className="text-3xl md:text-4xl font-black text-brand-bg opacity-40">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{step.title}</h3>
                    <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[20px] lg:static lg:block z-10 lg:-translate-x-1/2">
                  <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-brand-emerald ring-4 ring-white shadow-[0_0_20px_rgba(24,182,122,0.4)]" />
                </div>

                {/* Empty Side for spatial balance */}
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
