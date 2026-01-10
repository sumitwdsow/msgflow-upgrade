import { 
  Zap, 
  Send, 
  FileText, 
  MessageCircle, 
  BarChart3, 
  Wallet, 
  Building2, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Bolt Marketing",
    description: "Send campaigns instantly with one click. Fastest WhatsApp marketing solution in India.",
    highlight: true,
  },
  {
    icon: Send,
    title: "Bulk Campaigns",
    description: "Upload CSV/Excel files, schedule campaigns, and reach thousands of customers instantly.",
  },
  {
    icon: FileText,
    title: "Template Management",
    description: "Apply, track, and preview WhatsApp message templates with ease.",
  },
  {
    icon: MessageCircle,
    title: "Inbox Conversations",
    description: "24-hour session chat management with intuitive chat-style UI.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Track message delivery, costs, and export detailed reports.",
  },
  {
    icon: Wallet,
    title: "Wallet System",
    description: "Auto-debit functionality, refunds, and complete transaction history.",
  },
  {
    icon: Building2,
    title: "Business Profile",
    description: "Meta-verified business name, profile picture, and about section.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Encrypted tokens, comprehensive audit logs, and secure API integration.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need to run
            <span className="text-gradient"> WhatsApp campaigns</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools and features designed to scale your WhatsApp business messaging
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group ${
                feature.highlight 
                  ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20' 
                  : ''
              }`}
            >
              {feature.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    UNIQUE FEATURE
                  </span>
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                feature.highlight 
                  ? 'bg-primary/10 group-hover:bg-primary/20' 
                  : 'bg-muted group-hover:bg-primary/10'
              }`}>
                <feature.icon className={`w-6 h-6 ${
                  feature.highlight ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                }`} />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
