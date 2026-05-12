import { motion } from "motion/react";
import { Layout, Image as ImageIcon, Sparkles, Play, Diamond, Wand2, BookOpen, Layers } from "lucide-react";

const services = [
  {
    title: "Social Media Design",
    description: "High-converting visual assets for premium social presence.",
    icon: <Sparkles className="w-6 h-6" />,
    features: ["Custom Layouts", "Engagement Focused", "Brand Synergy"]
  },
  {
    title: "Thumbnail Design",
    description: "Strategic thumbnails designed to maximize click-through rates.",
    icon: <Play className="w-6 h-6" />,
    features: ["CTR Optimization", "Visual Storytelling", "High Impact"]
  },
  {
    title: "Logo Design",
    description: "Memorable brand identities for modern enterprise companies.",
    icon: <Diamond className="w-6 h-6" />,
    features: ["Vector Icons", "Brand Manuals", "Scalable Systems"]
  },
  {
    title: "Manipulation Design",
    description: "Complex digital art and photo manipulation for unique visuals.",
    icon: <Wand2 className="w-6 h-6" />,
    features: ["Creative Compositing", "Hyper-realistic", "Custom Brushes"]
  },
  {
    title: "Cover Design",
    description: "Editorial-grade covers for books, podcasts, and singles.",
    icon: <BookOpen className="w-6 h-6" />,
    features: ["Layout Mastery", "Rich Textures", "Concept Art"]
  },
  {
    title: "Print Design",
    description: "Physical brand touchpoints with luxury finish expectations.",
    icon: <Layers className="w-6 h-6" />,
    features: ["Ready for Print", "Luxury Materials", "Global Standards"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-brand-emerald" />
            <span className="text-sm font-bold text-brand-text">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-brand-text leading-[1.1] max-w-4xl">
            Specialized in Enterprise-Grade <br /> Visual Design
          </h2>
          <p className="text-base md:text-lg text-brand-muted mt-6 max-w-2xl">
            We focus on premium visual systems that help high-ticket brands communicate value instantly and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                },
                hover: { 
                  y: -5, 
                  boxShadow: "0 20px 40px -15px rgba(24,182,122,0.05)" 
                }
              }}
              className="group bg-brand-card border border-brand-border p-8 rounded-[20px] transition-all hover:border-brand-emerald/30 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="w-32 h-32 bg-brand-emerald rounded-full blur-2xl" />
              </div>
              
              <motion.div 
                variants={{
                  hover: { 
                    scale: [1, 1.15, 1],
                    transition: { 
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                }}
                className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center text-brand-emerald mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-all shadow-sm"
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-xs font-medium text-brand-muted">
                    <div className="w-1 h-1 rounded-full bg-brand-emerald" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
