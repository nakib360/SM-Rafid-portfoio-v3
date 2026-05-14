import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function About() {
  const tags = [
    "Brand Identity",
    "Social Media Creatives",
    "Content Visuals",
    "Marketing Graphics",
    "Print & Packaging"
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-text rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-emerald opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-[-15px] rounded-full bg-brand-emerald/20 blur-xl animate-pulse" />
                <div className="absolute inset-[-2px] rounded-full bg-gradient-to-tr from-brand-emerald to-transparent opacity-50" />

                <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-white/5 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    alt="S M Rafid Ayman"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[0.1]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-brand-emerald" />
                <span className="text-sm font-bold text-white/90">About Me</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 md:mb-8">
                S M Rafid Ayman
              </h2>
              <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed font-medium">
                I am S M Rafid Ayman, a creative Graphic Designer with a strong focus on modern, clean, and effective visual design. Based in Chattogram, Bangladesh, I work with clients to create impactful designs that strengthen brand identity and improve digital presence. Alongside client work, I continuously refine my skills to stay aligned with current design trends and industry standards.
              </p>

              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold text-white/80 hover:bg-brand-emerald/10 hover:border-brand-emerald/30 hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
