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
              className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full"
            >
              {/* Official Meta Logo */}
              <svg 
                viewBox="0 0 36 36" 
                className="w-8 h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="metaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0082FB" />
                    <stop offset="100%" stopColor="#00D0FF" />
                  </linearGradient>
                </defs>
                <path
                  d="M8.43 18.09c0-2.52.74-4.84 1.98-6.54 1.6-2.17 3.94-3.32 6.56-3.32 2.12 0 4.02.82 5.47 2.36.42.44.8.93 1.14 1.45.34-.52.72-1.01 1.14-1.45 1.45-1.54 3.35-2.36 5.47-2.36 2.62 0 4.96 1.15 6.56 3.32 1.24 1.7 1.98 4.02 1.98 6.54 0 2.48-.72 4.78-1.92 6.47-1.6 2.24-4 3.44-6.62 3.44-2.12 0-4.02-.82-5.47-2.36-.44-.47-.84-.98-1.2-1.53-.36.55-.76 1.06-1.2 1.53-1.45 1.54-3.35 2.36-5.47 2.36-2.62 0-5.02-1.2-6.62-3.44-1.2-1.69-1.92-3.99-1.92-6.47h.12zm8.54-6.44c-1.8 0-3.4.86-4.46 2.3-.92 1.26-1.46 2.98-1.46 4.14 0 1.16.54 2.88 1.46 4.14 1.06 1.44 2.66 2.3 4.46 2.3 1.5 0 2.86-.58 3.9-1.68.26-.28.5-.58.72-.9.52-.84.88-1.74 1.04-2.68.04-.24.06-.48.08-.74v-.88c-.02-.26-.04-.5-.08-.74-.16-.94-.52-1.84-1.04-2.68-.22-.32-.46-.62-.72-.9-1.04-1.1-2.4-1.68-3.9-1.68zm13.76 0c-1.5 0-2.86.58-3.9 1.68-.26.28-.5.58-.72.9-.52.84-.88 1.74-1.04 2.68-.04.24-.06.48-.08.74v.88c.02.26.04.5.08.74.16.94.52 1.84 1.04 2.68.22.32.46.62.72.9 1.04 1.1 2.4 1.68 3.9 1.68 1.8 0 3.4-.86 4.46-2.3.92-1.26 1.46-2.98 1.46-4.14 0-1.16-.54-2.88-1.46-4.14-1.06-1.44-2.66-2.3-4.46-2.3z"
                  fill="url(#metaGradient)"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-xs text-background/60">Official</span>
                <span className="text-sm font-semibold text-background">Meta Partner</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;