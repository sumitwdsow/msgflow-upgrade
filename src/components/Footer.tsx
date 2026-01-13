import { motion } from "framer-motion";
import { MessageSquare, Shield, Zap, Globe, ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import metaPartnerLogo from "@/assets/meta-partner.avif";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Features", href: "https://msgflow.in/#features", isExternal: true },
    { label: "How It Works", href: "https://msgflow.in/#how-it-works", isExternal: true },
    { label: "FAQ", href: "https://msgflow.in/#faq", isExternal: true },
    { label: "Pricing", href: "https://msgflow.in/pricing", isExternal: true },
    { label: "Bolt Marketing", href: "/bolt-marketing-dashboard", isRoute: true },
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
              className="flex items-center gap-3"
            >
              <img 
                src={metaPartnerLogo} 
                alt="Official Meta Business Partner" 
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;