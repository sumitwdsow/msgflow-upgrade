import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare, Zap, ArrowRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            >
              <MessageSquare className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <span className={`font-display font-bold text-xl transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                MsgFlow
              </span>
              <span className={`block text-xs transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
                Meta Business Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Bolt Marketing Special Link */}
            <Link
              to="/bolt-marketing"
              className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all rounded-lg group ${
                isScrolled 
                  ? "text-foreground hover:bg-primary/10" 
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Zap className="w-4 h-4 text-amber-500" />
              </motion.div>
              <span>Bolt Marketing</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            </Link>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isScrolled 
                    ? "text-foreground hover:bg-muted hover:text-primary" 
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className={`font-medium ${
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-white hover:bg-white/10"
              }`}
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group" 
              asChild
            >
              <Link to="/signup">
                Sign Up
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background border-t border-border rounded-b-2xl shadow-xl"
            >
              <nav className="flex flex-col py-4">
                {/* Bolt Marketing Mobile */}
                <Link
                  to="/bolt-marketing"
                  className="flex items-center gap-2 px-4 py-3 text-foreground hover:bg-muted transition-colors mx-2 rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="font-medium">Bolt Marketing</span>
                  <span className="ml-auto px-2 py-0.5 bg-amber-500/10 text-amber-600 text-xs font-medium rounded-full">
                    NEW
                  </span>
                </Link>
                
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-foreground hover:bg-muted transition-colors mx-2 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="flex flex-col gap-2 px-4 pt-4 mt-4 border-t border-border">
                  <Button variant="outline" className="h-12 rounded-xl" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="h-12 bg-gradient-to-r from-primary to-accent text-white rounded-xl" asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;