import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    Navigation: ["Home", "About Us", "Services", "Pricing"],
    "What we do": ["Cleaning", "Office Cleaning", "House Cleaning", "Apartment Cleaning"],
    Support: ["FAQs", "Privacy", "Terms & Conditions", "Contact"],
  };

  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      {/* Large Brand Text as Background */}
      <div className="absolute inset-0 opacity-10 md:opacity-5 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Mobile: Stacked Vertical Layout */}
        <div className="md:hidden flex flex-col items-center space-y-2 floating-text">
          <h2 className="text-[8rem] font-black tracking-wider whitespace-nowrap rainbow-text leading-none">CLEAN</h2>
          <h2 className="text-[8rem] font-black tracking-wider whitespace-nowrap rainbow-text leading-none">BY</h2>
          <h2 className="text-[8rem] font-black tracking-wider whitespace-nowrap rainbow-text leading-none">MIDE</h2>
        </div>

        {/* Desktop: Horizontal scrolling from right to left */}
        <div className="hidden md:block animate-scroll-text-horizontal floating-text w-full">
          <h2 className="text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold tracking-wider whitespace-nowrap rainbow-text">
            CLEANBYMIDE • CLEANBYMIDE • CLEANBYMIDE • CLEANBYMIDE • CLEANBYMIDE • CLEANBYMIDE • CLEANBYMIDE • CLEANBYMIDE •
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Clean by Mide" className="h-16 mb-4" />
            <p className="text-white/70 text-sm mb-6">
              Professional cleaning services for homes and offices.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © 2025 Clean by Mide. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
