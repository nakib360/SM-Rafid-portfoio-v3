import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 md:pt-48 pb-24 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-brand-emerald opacity-5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white border border-brand-border text-[10px] md:text-[12px] font-semibold tracking-widest text-brand-muted mb-6 md:mb-8 shadow-sm"
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(24,182,122,0.6)]"
              />
              Available for new project
            </motion.div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-emerald mb-2">
                Assalamu Alaikum
              </h2>
              <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-display font-bold leading-[1.05] tracking-tight text-brand-text mb-4">
                I am S M Rafid Ayman
              </h1>
              <p className="text-lg md:text-xl text-brand-muted mb-8 font-medium">
                From <span className="text-brand-text">Chittagong, Bangladesh</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-brand-text text-white px-8 md:px-10 py-4 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2 hover:bg-brand-text/90 group shadow-xl">
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-brand-border text-brand-text px-8 md:px-10 py-4 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2 hover:bg-brand-bg group">
                Let's talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative lg:order-last flex justify-center"
          >
            <div className="relative w-full max-w-[400px] md:max-w-xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-emerald/10 blur-[100px] rounded-full -z-10 animate-pulse" />

              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1000"
                  alt="S M Rafid Ayman"
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
