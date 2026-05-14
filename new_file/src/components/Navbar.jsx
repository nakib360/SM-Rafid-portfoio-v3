import { motion } from "motion/react";

export function Navbar() {
  const links = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-nav px-4 md:px-6 py-2.5 md:py-3 rounded-full flex items-center justify-between w-full max-w-5xl shadow-sm"
      >
        <div className="flex items-center">
          <a href="/" className="text-brand-text font-bold text-sm md:text-lg tracking-tight whitespace-nowrap">
            SM Rafid Ayman
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-muted hover:text-brand-emerald transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="bg-brand-emerald hover:bg-brand-hover text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all shadow-md shadow-brand-emerald/10 shrink-0">
          Let's Talk
        </button>
      </motion.div>
    </nav>
  );
}
