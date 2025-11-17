import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-60 bg-linear-to-r from-[#0b3d64] to-[#084057] text-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 md:h-12 items-center justify-between text-xs md:text-sm">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+918368686070"
              className="flex items-center gap-1.5 hover:text-[#1a9bb9] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline">+91-8368686070</span>
              <span className="sm:hidden">+91-8368686070</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <a
              href="mailto:info@company.com"
              className="flex items-center gap-1.5 hover:text-[#1a9bb9] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline">info@company.com</span>
              <span className="sm:hidden">info@company.com</span>
            </a>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a9bb9] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a9bb9] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a9bb9] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a9bb9] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a9bb9] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

