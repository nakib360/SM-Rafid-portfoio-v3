import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const categories = ["All", "Branding", "Social Media", "Packaging", "Thumbnails", "Covers"];

const projects = [
  {
    title: "EcoFlow Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    aspect: "aspect-[3/4]",
    className: "lg:col-span-1"
  },
  {
    title: "Premium Tech Kit",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000",
    aspect: "aspect-square",
    className: "lg:col-span-1"
  },
  {
    title: "Future of Finance",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    aspect: "aspect-[4/5]",
    className: "lg:col-span-1"
  },
  {
    title: "Luxe Minimalist Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
    aspect: "aspect-[16/9]",
    className: "lg:col-span-2"
  },
  {
    title: "Abstract Concept Art",
    category: "Covers",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000",
    aspect: "aspect-[9/16]",
    className: "lg:col-span-1"
  },
  {
    title: "Content Creator Studio",
    category: "Thumbnails",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    aspect: "aspect-[4/3]",
    className: "lg:col-span-1"
  },
  {
    title: "Metropolis Fashion",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1539109139181-319187395ea0?auto=format&fit=crop&q=80&w=1000",
    aspect: "aspect-[3/4]",
    className: "lg:col-span-1"
  },
  {
    title: "Modern Oasis",
    category: "Covers",
    image: "https://images.unsplash.com/photo-1449156001437-3a16d1dfda70?auto=format&fit=crop&q=80&w=1000",
    aspect: "aspect-square",
    className: "lg:col-span-1"
  }
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-brand-emerald" />
            <span className="text-sm font-bold text-brand-text">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-brand-text leading-[1.05] max-w-4xl">
            A curated collection of <br /> visual excellence.
          </h2>
          
          <div className="mt-12 md:mt-16 w-full overflow-hidden">
            <div className="flex md:justify-center overflow-x-auto no-scrollbar scroll-smooth px-6 md:px-0">
              <div className="flex gap-2 p-1.5 bg-[#F8F9F8] rounded-full border border-brand-border shadow-sm shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-5 md:px-8 py-2.5 rounded-full text-[11px] md:text-xs font-bold transition-all whitespace-nowrap cursor-pointer uppercase tracking-wider shrink-0 ${
                      activeTab === cat 
                        ? "bg-brand-text text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]" 
                        : "text-brand-muted hover:text-brand-text"
                    }`}
                  >
                    {cat === "All" ? "ALL CATEGORY'S" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-8 lg:gap-10 space-y-5 md:space-y-8 lg:space-y-10 group/portfolio">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-brand-bg hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700"
            >
              <div className={`${project.aspect} w-full overflow-hidden relative`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay with high-end typography */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-700 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-brand-emerald font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold font-sans tracking-tight mb-4">
                      {project.title}
                    </h3>
                    <div className="w-12 h-[2px] bg-brand-emerald scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </div>
              </div>

              {/* Mobile Info (visible when not hovered, or always on mobile) */}
              <div className="mt-6 md:hidden px-2">
                <span className="text-brand-emerald font-bold text-[10px] uppercase tracking-wider mb-1 block">{project.category}</span>
                <h3 className="text-brand-text text-lg font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-brand-text text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-brand-emerald transition-colors duration-500 shadow-xl shadow-brand-text/10"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}
