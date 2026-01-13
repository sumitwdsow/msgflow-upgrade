import { motion } from "framer-motion";
import { MessageSquare, Shield, Zap, Globe, ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Features", href: "https://msgflow.in/#features", isExternal: true },
    { label: "How It Works", href: "https://msgflow.in/#how-it-works", isExternal: true },
    { label: "FAQ", href: "https://msgflow.in/#faq", isExternal: true },
    { label: "Pricing", href: "https://msgflow.in/pricing", isExternal: true },
    { label: "Bolt Marketing", href: "/bolt-marketing", isRoute: true },
  ];

  const companyLinks = [
    { label: "Contact", href: "https://msgflow.in/#contact", isExternal: true },
    { label: "Privacy Policy", href: "https://msgflow.in/privacy", isExternal: true },
    { label: "Terms of Service", href: "https://msgflow.in/terms", isExternal: true },
    { label: "Refund Policy", href: "https://msgflow.in/refund", isExternal: true },
    { label: "Documentation", href: "https://msgflow.in/documentation", isExternal: true },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
              >
                <MessageSquare className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <span className="font-display font-bold text-2xl text-background group-hover:text-primary transition-colors">
                  MsgFlow
                </span>
                <span className="block text-xs text-background/60">
                  Official Meta Partner
                </span>
              </div>
            </Link>
            <p className="text-background/70 max-w-md mb-8 leading-relaxed">
              MsgFlow is a SaaS platform by We Digital Services, designed to simplify 
              WhatsApp Business Messaging. Using Meta's official technology, we help 
              businesses scale customer engagement securely and reliably.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Shield, label: "Secure" },
                { icon: Zap, label: "Fast" },
                { icon: Globe, label: "Reliable" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-background mb-6 text-lg">
              Product
            </h4>
            <ul className="space-y-4">
              {productLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="text-background/70 hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.isExternal && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-background mb-6 text-lg">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="text-background/70 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.isExternal && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-background/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60 flex items-center gap-1">
              © {currentYear} MsgFlow by We Digital Services. Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              in India
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-lg"
            >
              {/* Official Meta Infinity Logo */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="metaGradientFooter" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#0064E0" />
                    <stop offset="50%" stopColor="#0064E0" />
                    <stop offset="100%" stopColor="#0AC7F5" />
                  </linearGradient>
                </defs>
                <path
                  d="M22.3 66.8c-5.1-7-8.4-15.4-8.4-22.6 0-11.3 5.9-19 14.4-19 5.6 0 10.4 3.8 15.3 11.2l3.4 5.2 3.4-5.2c4.9-7.4 9.7-11.2 15.3-11.2 8.5 0 14.4 7.7 14.4 19 0 7.2-3.3 15.6-8.4 22.6-5.7 7.8-13.1 13.6-21.3 13.6-8.2 0-15.6-5.8-21.3-13.6h-6.8zm24.7-8.4c3.3 5.1 6.3 8 10 8 5.2 0 10.2-4.5 14.3-10.1 3.8-5.2 6.2-11.2 6.2-16.1 0-6.6-3.1-10.8-7.8-10.8-3.7 0-6.7 2.9-10 8l-6.3 9.5-6.4-9.5c-3.3-5.1-6.3-8-10-8-4.7 0-7.8 4.2-7.8 10.8 0 4.9 2.4 10.9 6.2 16.1 4.1 5.6 9.1 10.1 14.3 10.1 3.7 0 6.7-2.9 10-8l-6.4-9.5-6.3 9.5z"
                  fill="url(#metaGradientFooter)"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium">Official</span>
                <span className="text-base font-bold text-gray-900">Meta Partner</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;