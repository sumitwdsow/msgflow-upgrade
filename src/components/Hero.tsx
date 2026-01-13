import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart3, CheckCircle, Play, MessageSquare, Send, Users } from "lucide-react";
import metaPartnerLogo from "@/assets/meta-partner.avif";

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
              className="inline-flex items-center mb-6"
            >
              <img 
                src={metaPartnerLogo} 
                alt="Official Meta Business Partner" 
                className="h-10 w-auto object-contain"
              />
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
                      Sign Up Now
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

          {/* Right Content - WhatsApp Chat UI */}
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
                <span className="text-sm font-medium text-foreground">Live Campaign</span>
              </motion.div>

              {/* WhatsApp Phone Mockup */}
              <motion.div 
                className="relative bg-[#111B21] rounded-[2.5rem] p-2 shadow-2xl border border-white/10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#111B21] rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="bg-[#0B141A] rounded-[2rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#202C33] px-4 py-3 flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                    >
                      <span className="text-white font-bold text-sm">M</span>
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <motion.span 
                          className="text-white font-semibold text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.9 }}
                        >
                          MsgFlow Business
                        </motion.span>
                        {/* Blue Verified Tick */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 1.1, type: "spring" }}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" fill="#00A3FF"/>
                            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </div>
                      <motion.span 
                        className="text-[#8696A0] text-xs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        Online • Sending messages...
                      </motion.span>
                    </div>
                    <div className="flex items-center gap-4 text-[#AEBAC1]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"/>
                      </svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Chat Background */}
                  <div className="h-[320px] bg-[#0B141A] relative overflow-hidden px-3 py-4">
                    {/* WhatsApp Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />

                    {/* Messages */}
                    <div className="relative z-10 space-y-3">
                      {/* Incoming Message 1 */}
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 1.3 }}
                      >
                        <div className="bg-[#202C33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                          <p className="text-white text-sm">🎉 Welcome to MsgFlow!</p>
                          <p className="text-white/70 text-sm mt-1">Your WhatsApp marketing journey starts now.</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[10px] text-[#8696A0]">10:30 AM</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Outgoing Message 1 */}
                      <motion.div
                        className="flex justify-end"
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 1.8 }}
                      >
                        <div className="bg-[#005C4B] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                          <p className="text-white text-sm">📢 Flash Sale Alert!</p>
                          <p className="text-white/90 text-sm mt-1">Get 50% OFF on all products. Use code: MSGFLOW50</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[10px] text-[#8696A0]">10:31 AM</span>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2.3 }}
                            >
                              <svg className="w-4 h-4 text-[#53BDEB]" viewBox="0 0 16 11" fill="currentColor">
                                <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.136.475.475 0 0 0-.347.147.518.518 0 0 0 .003.7l2.734 2.585c.089.084.21.131.335.131.126 0 .249-.05.339-.138l6.533-8.055a.517.517 0 0 0-.018-.682z"/>
                                <path d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.136.475.475 0 0 0-.347.147.518.518 0 0 0 .003.7l2.734 2.585c.089.084.21.131.335.131.126 0 .249-.05.339-.138l6.533-8.055a.517.517 0 0 0-.018-.682z"/>
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Outgoing Message 2 with Animation */}
                      <motion.div
                        className="flex justify-end"
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 2.8 }}
                      >
                        <div className="bg-[#005C4B] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                          <p className="text-white text-sm">⚡ Campaign sent to 1,000 users</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[10px] text-[#8696A0]">10:31 AM</span>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 3.3 }}
                            >
                              <svg className="w-4 h-4 text-[#53BDEB]" viewBox="0 0 16 11" fill="currentColor">
                                <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.136.475.475 0 0 0-.347.147.518.518 0 0 0 .003.7l2.734 2.585c.089.084.21.131.335.131.126 0 .249-.05.339-.138l6.533-8.055a.517.517 0 0 0-.018-.682z"/>
                                <path d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.136.475.475 0 0 0-.347.147.518.518 0 0 0 .003.7l2.734 2.585c.089.084.21.131.335.131.126 0 .249-.05.339-.138l6.533-8.055a.517.517 0 0 0-.018-.682z"/>
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Typing Indicator */}
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ delay: 3.5, duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <div className="bg-[#202C33] rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
                          <div className="flex gap-1">
                            <motion.div 
                              className="w-2 h-2 bg-[#8696A0] rounded-full"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-[#8696A0] rounded-full"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-[#8696A0] rounded-full"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* WhatsApp Input Bar */}
                  <div className="bg-[#202C33] px-3 py-2 flex items-center gap-2">
                    <div className="text-[#8696A0]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1 1 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.075-1.114l-.285-.17-2.96.87.871-2.96-.17-.285A7.962 7.962 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                      </svg>
                    </div>
                    <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 flex items-center">
                      <span className="text-[#8696A0] text-sm">Type a message...</span>
                    </div>
                    <motion.div 
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Send className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-xl z-10"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 2 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Speed</div>
                    <div className="text-sm font-bold text-foreground">10K/min</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-xl z-10"
                initial={{ scale: 0, rotate: 20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 2.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Delivered</div>
                    <div className="text-sm font-bold text-foreground">99.9%</div>
                  </div>
                </div>
              </motion.div>

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
