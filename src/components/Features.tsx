import { motion } from "framer-motion";
import { 
  Zap, 
  Send, 
  FileText, 
  MessageCircle, 
  BarChart3, 
  Wallet, 
  Building2, 
  Shield,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Bolt Marketing",
    description: "Send campaigns instantly with one click. Fastest WhatsApp marketing solution in India.",
    highlight: true,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Send,
    title: "Bulk Campaigns",
    description: "Upload CSV/Excel files, schedule campaigns, and reach thousands of customers instantly.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Template Management",
    description: "Apply, track, and preview WhatsApp message templates with ease.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageCircle,
    title: "Inbox Conversations",
    description: "24-hour session chat management with intuitive chat-style UI.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Track message delivery, costs, and export detailed reports.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Wallet,
    title: "Wallet System",
    description: "Auto-debit functionality, refunds, and complete transaction history.",
    gradient: "from-rose-500 to-red-500",
  },
  {
    icon: Building2,
    title: "Business Profile",
    description: "Meta-verified business name, profile picture, and about section.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Encrypted tokens, comprehensive audit logs, and secure API integration.",
    gradient: "from-slate-500 to-gray-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
            Powerful Features
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to run
            <span className="text-gradient block mt-2">WhatsApp campaigns</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and features designed to scale your WhatsApp business messaging with enterprise-grade reliability
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-2xl bg-card border transition-all duration-500 ${
                feature.highlight 
                  ? 'border-primary/30 shadow-lg shadow-primary/10' 
                  : 'border-border hover:border-primary/20 hover:shadow-xl'
              }`}
            >
              {/* Highlight Badge */}
              {feature.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg"
                  >
                    <Zap className="w-3 h-3" />
                    UNIQUE
                  </motion.span>
                </div>
              )}

              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} pointer-events-none`} style={{ opacity: 0 }}>
                <div className="absolute inset-0 bg-card opacity-95" />
              </div>

              {/* Card Content */}
              <div className="relative p-6">
                {/* Icon Container */}
                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 bg-gradient-to-br ${feature.gradient} group-hover:scale-110 group-hover:shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;