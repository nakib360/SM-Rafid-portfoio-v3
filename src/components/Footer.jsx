import { Instagram, Twitter, Linkedin, Github, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-brand-border bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[11px] md:text-xs font-semibold text-brand-muted tracking-wide">
            © 2024 S M Rafid Ayman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
