import { motion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const testimonials = [
  {
    content: "Rafid's ability to translate complex SaaS values into high-end visuals is unmatched. He is our go-to for all creative assets.",
    author: "James Wilson",
    role: "CEO at TechFlow"
  },
  {
    content: "The thumbail designs Rafid produced for our channel increased our CTR by 40% in the first month. Incredible attention to detail.",
    author: "Sarah Chen",
    role: "Growth Lead at ContentLab"
  },
  {
    content: "Minimal, elite, and professional. The brand identity Rafid built for us feels like a billion-dollar company.",
    author: "Marco Rossi",
    role: "Founder of Nexus AI"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-brand-emerald" />
            <span className="text-sm font-bold text-brand-text">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
            What Our Customers Say <br className="hidden sm:block" /> About My Services?
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-brand-border p-8 md:p-10 rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-brand-emerald/10 transition-all flex flex-col justify-between min-w-[85vw] sm:min-w-[400px] lg:min-w-0"
            >
              <p className="text-brand-text text-base md:text-lg italic leading-relaxed mb-8 md:mb-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-brand-text">{t.author}</p>
                  <p className="text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-16">
          <button className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-emerald-dark hover:bg-brand-bg transition-colors shadow-sm">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-emerald-dark hover:bg-brand-bg transition-colors shadow-sm">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
