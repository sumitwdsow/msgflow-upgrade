import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart3, CheckCircle, Play, MessageSquare, Send, Users } from "lucide-react";

const Hero = () => {
  const [messageCount, setMessageCount] = useState(0);

  // Animate counter
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setMessageCount(prev => {
          if (prev >= 5000000) return 5000000;
          return prev + Math.floor(Math.random() * 150000) + 50000;
        });
      }, 50);
      setTimeout(() => clearInterval(interval), 2000);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{ 
              top: `${5 + i * 7}%`,
              width: '100%',
            }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '200%', opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <CheckCircle className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">Official Meta Business Partner</span>
            </motion.div>

            {/* Heading with Letter Animation */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                WhatsApp
              </motion.span>
              <motion.span 
                className="text-gradient block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Marketing Platform
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Send thousands of messages instantly with{" "}
              <motion.span 
                className="text-primary font-semibold inline-flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5" />
                Bolt Marketing
              </motion.span>
              . Powered by Meta's WhatsApp Business API.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 glow-primary relative overflow-hidden group"
                  asChild
                >
                  <a href="https://msgflow.in/register" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center">
                      Get Started Free
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10 text-lg px-8 h-14 group"
                  asChild
                >
                  <a href="#contact">
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Book a Demo
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Animated Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { value: "500+", label: "Businesses", icon: Users },
                { value: `${(messageCount / 1000000).toFixed(1)}M+`, label: "Messages", icon: Send },
                { value: "99.9%", label: "Uptime", icon: CheckCircle },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-gradient flex items-center gap-2 justify-center lg:justify-start"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Points */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
            >
              {[
                "No credit card",
                "5-min setup",
                "24/7 support"
              ].map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 text-white/60 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span>{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Dashboard Preview */}
          <motion.div 
            className="relative lg:pl-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Live Badge */}
              <motion.div 
                className="absolute -top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 1 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-foreground">Live</span>
              </motion.div>

              {/* Main Dashboard Card */}
              <motion.div 
                className="glass-card rounded-2xl p-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6">
                  {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
                    <motion.div 
                      key={i}
                      className={`w-3 h-3 rounded-full ${color}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    />
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "10K+", label: "Messages/Min" },
                    { value: "99.9%", label: "Delivery" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white/5 rounded-xl p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + i * 0.2 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 + i * 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bolt Marketing Feature */}
                <motion.div 
                  className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-4 border border-primary/30 mb-4 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  
                  <div className="flex items-center gap-2 mb-3 relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Zap className="w-5 h-5 text-primary" />
                    </motion.div>
                    <span className="font-semibold text-white">Bolt Marketing</span>
                  </div>
                  <div className="space-y-2 text-sm relative z-10">
                    {[
                      { icon: Zap, text: "Lightning fast delivery" },
                      { icon: BarChart3, text: "Real-time analytics" },
                      { icon: CheckCircle, text: "Instant confirmation" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center gap-2 text-white/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Animated Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-white/60 mb-2">
                    <span>Campaign Progress</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      1,000/1,000
                    </motion.span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Success Card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl z-10"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 1.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                    <div className="text-xl font-bold text-foreground">99.9%</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Message Bubbles */}
              {[
                { x: -80, y: 60, delay: 2 },
                { x: 320, y: 120, delay: 2.3 },
                { x: 280, y: -20, delay: 2.6 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute z-10"
                  style={{ left: pos.x, top: pos.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: pos.delay, type: "spring" }}
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 flex items-center gap-2"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span className="text-white text-xs font-medium">Sent ✓</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
