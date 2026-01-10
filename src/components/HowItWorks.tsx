import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UserPlus, Rocket, TrendingUp, ArrowRight, Check, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up & Setup",
    description: "Create your account in 2 minutes. Add your business details and connect your WhatsApp number.",
    details: ["Free account creation", "Meta business verification", "Instant WhatsApp linking"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Create Campaign",
    description: "Upload contacts, choose template, and customize your message. Use Bolt Marketing for instant sending.",
    details: ["CSV/Excel upload", "Template library", "Smart scheduling"],
    color: "from-primary to-accent",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track & Grow",
    description: "Monitor delivery rates, read receipts, and ROI. Engage with customer replies in real-time.",
    details: ["Real-time analytics", "Delivery tracking", "ROI dashboard"],
    color: "from-purple-500 to-pink-500",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Simple Process
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Started in
            <span className="text-gradient block mt-2">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signup to sending your first campaign in under 5 minutes
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-32 left-[16.666%] right-[16.666%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-card rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-500"
                >
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
                    className="absolute -top-5 left-8"
                  >
                    <span className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${step.color} text-white font-display font-bold text-sm rounded-xl shadow-lg`}>
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-4 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl bg-card border border-border shadow-lg">
            <div className="px-6 py-3 text-muted-foreground text-sm">
              Ready to scale your WhatsApp marketing?
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="https://msgflow.in/register" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;