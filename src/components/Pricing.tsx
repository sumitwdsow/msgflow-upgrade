import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, ArrowRight, Star, Crown, Building } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    price: "Free",
    period: "to get started",
    icon: Star,
    features: [
      "500 messages/month",
      "1 WhatsApp number",
      "Basic templates",
      "Email support",
      "Basic analytics",
    ],
    cta: "Start Free",
    popular: false,
    gradient: "from-slate-500 to-gray-600",
  },
  {
    name: "Professional",
    description: "For growing businesses with higher volume",
    price: "₹2,999",
    period: "/month",
    icon: Crown,
    features: [
      "10,000 messages/month",
      "3 WhatsApp numbers",
      "Advanced templates",
      "Priority support",
      "Advanced analytics",
      "Bolt Marketing",
      "API access",
    ],
    cta: "Get Started",
    popular: true,
    gradient: "from-primary to-accent",
  },
  {
    name: "Enterprise",
    description: "For large scale operations",
    price: "Custom",
    period: "pricing",
    icon: Building,
    features: [
      "Unlimited messages",
      "Unlimited numbers",
      "Custom templates",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-purple-500 to-pink-500",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

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
            <Zap className="w-4 h-4" />
            Flexible Pricing
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, transparent
            <span className="text-gradient block mt-2">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your business. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-8 border transition-all duration-500 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary/5 via-card to-card border-primary/30 shadow-2xl shadow-primary/10'
                    : 'bg-card border-border hover:border-primary/20 hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                  >
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full shadow-lg">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Plan Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg ${plan.popular ? 'mt-4' : ''}`}
                >
                  <plan.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full h-14 text-base font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg hover:shadow-xl'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                  asChild
                >
                  <a 
                    href={plan.name === 'Enterprise' ? '#contact' : 'https://msgflow.in/register'} 
                    target={plan.name === 'Enterprise' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>

                {/* Decorative Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 -z-10 blur-xl opacity-50" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border">
            <div className="flex -space-x-2">
              {['R', 'P', 'A', 'S'].map((letter, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{letter}</span>
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-foreground">500+</span> businesses already using MsgFlow
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;