import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  Upload, 
  FileText, 
  Send, 
  BarChart3,
  Users,
  Clock,
  Shield,
  Target,
  Sparkles,
  ChevronRight
} from "lucide-react";

const BoltMarketing = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [showMessages, setShowMessages] = useState(false);

  // Animate message counter
  useEffect(() => {
    const timer = setTimeout(() => setShowMessages(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMessages) {
      const interval = setInterval(() => {
        setMessageCount(prev => {
          if (prev >= 10000) return 10000;
          return prev + Math.floor(Math.random() * 500) + 200;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showMessages]);

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Send thousands of messages in seconds with our optimized delivery system." },
    { icon: Clock, title: "Instant Delivery", description: "Messages delivered instantly with real-time tracking." },
    { icon: BarChart3, title: "Analytics & Insights", description: "Track delivery rates, read receipts, and engagement metrics." },
    { icon: Users, title: "Bulk Messaging", description: "Reach thousands of customers simultaneously with personalized messages." },
  ];

  const benefits = [
    "Send up to 10,000+ messages per minute",
    "Template-based messaging with WhatsApp Business API",
    "Real-time delivery and read status tracking",
    "Personalized messages with dynamic variables",
    "Contact management and segmentation",
    "Cost-effective bulk messaging solution",
    "Official Meta Business Partner integration",
    "99.9% delivery success rate",
  ];

  const steps = [
    { number: "01", icon: Upload, title: "Upload Contacts", description: "Import your contact list via CSV or Excel file" },
    { number: "02", icon: FileText, title: "Choose Template", description: "Select from your approved WhatsApp templates" },
    { number: "03", icon: Send, title: "Send Instantly", description: "Click send and reach thousands in seconds" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">MsgFlow</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link to="/">Home</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Epic Animation */}
      <section className="relative min-h-screen hero-gradient pt-20 overflow-hidden">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{ 
                top: `${Math.random() * 100}%`,
                width: '100%',
              }}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: [0, 1, 0] }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="container-custom relative z-10 pt-20 pb-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Lightning Fast WhatsApp Marketing</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-center text-white mb-6"
          >
            Bolt
            <span className="text-gradient"> Marketing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 text-center max-w-2xl mx-auto mb-12"
          >
            Send thousands of WhatsApp messages <span className="text-primary font-semibold">instantly</span>. 
            The fastest way to reach your customers.
          </motion.p>

          {/* EPIC BOLT ANIMATION */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center mb-12">
            {/* Central Bolt Icon - Comes in with Flash */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.8
              }}
              className="relative z-20"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.5)",
                    "0 0 60px hsl(var(--primary) / 0.8)",
                    "0 0 20px hsl(var(--primary) / 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                >
                  <Zap className="w-16 h-16 md:w-20 md:h-20 text-white" fill="white" />
                </motion.div>
              </motion.div>

              {/* Electric sparks around the bolt */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ 
                    x: Math.cos(i * 45 * Math.PI / 180) * 100,
                    y: Math.sin(i * 45 * Math.PI / 180) * 100,
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 1.5 + i * 0.1,
                    repeatDelay: 1
                  }}
                />
              ))}
            </motion.div>

            {/* Messages Flying Out */}
            <AnimatePresence>
              {showMessages && [...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute z-10"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0,
                    opacity: 0 
                  }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 600,
                    y: (Math.random() - 0.5) * 400,
                    scale: 1,
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.15,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span className="text-white text-sm font-medium">Message {i + 1}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* WhatsApp Icons at the edges receiving messages */}
            {[
              { x: -280, y: -120 },
              { x: 280, y: -80 },
              { x: -250, y: 100 },
              { x: 260, y: 120 },
              { x: 0, y: -180 },
              { x: 0, y: 180 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2 + i * 0.2, duration: 0.5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </motion.div>
                
                {/* Notification badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 2.5 + i * 0.3, duration: 0.3 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                >
                  1
                </motion.div>
              </motion.div>
            ))}

            {/* Speed Lines */}
            {showMessages && [...Array(6)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-primary via-primary to-transparent origin-left"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '150px',
                  transform: `rotate(${i * 60}deg)`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  repeatDelay: 1.5
                }}
              />
            ))}
          </div>

          {/* Live Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
              <span className="text-white/70">Messages sent:</span>
              <span className="font-display text-3xl font-bold text-gradient">
                {messageCount.toLocaleString()}+
              </span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            {[
              { value: "10K+", label: "Messages/Min" },
              { value: "99.9%", label: "Delivery Rate" },
              { value: "<1s", label: "Avg. Speed" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 glow-primary" asChild>
              <a href="https://msgflow.in/register" target="_blank" rel="noopener noreferrer">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 h-14" asChild>
              <Link to="/#contact">Talk to Sales</Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for successful WhatsApp campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="feature-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Launch campaigns in 3 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
                <div className="bg-card rounded-2xl p-8 border border-border text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg mb-6">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="text-gradient">Bolt Marketing?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The most powerful WhatsApp marketing tool for businesses of all sizes
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary-foreground" fill="white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">Bolt Marketing</h3>
                    <p className="text-muted-foreground">Instant Campaign Delivery</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Speed", value: "10,000+ msg/min" },
                    { label: "Reliability", value: "99.9% uptime" },
                    { label: "Delivery", value: "< 1 second" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-background rounded-xl">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Bolt Marketing
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14" asChild>
              <a href="https://msgflow.in/register" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="mt-4 text-white/50 text-sm">
              No credit card required • Setup in 5 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8">
        <div className="container-custom text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} MsgFlow by We Digital Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BoltMarketing;
