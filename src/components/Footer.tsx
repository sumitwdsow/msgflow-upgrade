import { MessageSquare, Shield, Zap, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-background">
                  MsgFlow
                </span>
                <span className="block text-xs text-background/60">
                  Meta Business Partner
                </span>
              </div>
            </div>
            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              MsgFlow is a SaaS platform by We Digital Services, designed to simplify 
              WhatsApp Business Messaging. Using Meta's official technology, we help 
              businesses scale customer engagement securely and reliably.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Shield className="w-4 h-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Zap className="w-4 h-4" />
                <span>Fast</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Globe className="w-4 h-4" />
                <span>Reliable</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-background/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/70 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-background/70 hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://msgflow.in/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://msgflow.in/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="https://msgflow.in/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} MsgFlow by We Digital Services. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-background/60">Official</span>
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
              Meta Business Partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
