import { motion } from "motion/react";
import { Mail, MessageSquare, Facebook, ArrowUpRight, Star, Sparkles } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      label: "EMAIL",
      value: "Reach Out via Email",
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      color: "bg-[#EA4335] text-white",
      href: "mailto:rafidayman9@gmail.com"
    },
    {
      label: "WHATSAPP",
      value: "Instant Chat on WhatsApp",
      icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />,
      color: "bg-[#25D366] text-white",
      href: "https://wa.me/8801XXXXXXXXX"
    },
    {
      label: "FACEBOOK",
      value: "View Official Profile",
      icon: <Facebook className="w-5 h-5 md:w-6 md:h-6" />,
      color: "bg-[#1877F2] text-white",
      href: "https://facebook.com/rafidayman"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-brand-emerald" />
            <span className="text-sm font-bold text-brand-text">Let's Work Together</span>
          </div>
          <h2 className="text-5xl md:text-[80px] lg:text-[100px] font-display font-bold leading-[1] tracking-tight text-brand-text mb-10 max-w-5xl">
            Ready to create <br className="hidden md:block" /> something special?
          </h2>
          <p className="text-base md:text-xl text-brand-muted max-w-2xl leading-relaxed mb-10">
            Transform your business with elite-level visual language. Choose your preferred channel to start the conversation.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-emerald hover:bg-brand-hover text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-brand-emerald/20 mb-12 flex items-center gap-2 group"
          >
            Start Your Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>

          <div className="flex gap-6 items-center">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-brand-bg">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-brand-text">Joined by 200+ clients</p>
              <div className="flex gap-1 text-brand-emerald">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center justify-between p-5 md:p-8 bg-white border border-brand-border rounded-[24px] md:rounded-[32px] hover:border-brand-emerald/30 hover:shadow-2xl hover:shadow-brand-emerald/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 md:gap-8 min-w-0">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${contact.color} shadow-sm shrink-0 transition-transform group-hover:scale-110`}>
                  {contact.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-[0.2em] mb-1">
                    {contact.label}
                  </p>
                  <p className="text-sm md:text-2xl font-bold text-brand-text tracking-tight truncate">
                    {contact.value}
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-brand-border flex items-center justify-center text-brand-text group-hover:bg-brand-emerald group-hover:text-white group-hover:border-brand-emerald transition-all duration-300 shrink-0 ml-4">
                <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
