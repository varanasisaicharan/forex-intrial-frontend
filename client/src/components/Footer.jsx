import { CreditCard } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "Home", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Services", href: "#" },
      { name: "Contact", href: "#" }
    ]
  },
  {
    title: "Services", 
    links: [
      { name: "Forex Cards", href: "#" },
      { name: "Currency Exchange", href: "#" },
      { name: "Travel Insurance", href: "#" },
      { name: "Business Solutions", href: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms Condition", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" }
    ]
  }
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" }
];

export default function Footer() {
  return (
    <footer className="bg-teal-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <CreditCard className="text-teal-primary w-4 h-4" />
              </div>
              <span className="text-xl font-bold">Forex accounting</span>
            </div>
            <p className="text-teal-100 text-sm">
              Your trusted partner for seamless international transactions and forex card solutions.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-teal-100">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-teal-400 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-teal-100 mb-4 md:mb-0">
            Copyright © 2025 Forex accounting. Built with <span className="text-pink-300"></span> by Forex Accounting Team.
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
                aria-label={social.label}
                data-testid={`social-link-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
