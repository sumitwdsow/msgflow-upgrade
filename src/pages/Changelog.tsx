import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Bug, Zap, Shield, ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Changelog = () => {
  const releases = [
    {
      version: "2.1.0",
      date: "January 2025",
      type: "feature",
      title: "Bolt Marketing Launch",
      changes: [
        "Introduced Bolt Marketing for instant campaign delivery",
        "Send up to 10,000 messages per minute",
        "Real-time delivery tracking dashboard",
        "Priority queue for time-sensitive campaigns",
      ],
    },
    {
      version: "2.0.5",
      date: "December 2024",
      type: "improvement",
      title: "Performance Improvements",
      changes: [
        "Improved message delivery speed by 40%",
        "Enhanced template approval process",
        "Better error handling for failed messages",
        "Optimized dashboard loading times",
      ],
    },
    {
      version: "2.0.0",
      date: "November 2024",
      type: "feature",
      title: "API V2 Release",
      changes: [
        "New RESTful API with improved authentication",
        "Bulk messaging endpoint (up to 100 recipients)",
        "Webhook support for delivery status",
        "API key scopes for granular permissions",
      ],
    },
    {
      version: "1.9.0",
      date: "October 2024",
      type: "security",
      title: "Security Updates",
      changes: [
        "Enhanced encryption for message content",
        "Two-factor authentication support",
        "Improved rate limiting mechanisms",
        "Audit logs for account activities",
      ],
    },
    {
      version: "1.8.0",
      date: "September 2024",
      type: "feature",
      title: "Contact Management",
      changes: [
        "Import contacts from CSV/Excel files",
        "Contact segmentation and tagging",
        "Automated contact syncing",
        "Duplicate detection and merging",
      ],
    },
    {
      version: "1.7.0",
      date: "August 2024",
      type: "improvement",
      title: "Template Builder",
      changes: [
        "Visual template builder with preview",
        "Support for media templates (images, videos)",
        "Quick reply and CTA buttons",
        "Template variable validation",
      ],
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <Sparkles className="w-5 h-5" />;
      case "improvement":
        return <Zap className="w-5 h-5" />;
      case "security":
        return <Shield className="w-5 h-5" />;
      case "bugfix":
        return <Bug className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "improvement":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "security":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "bugfix":
        return "bg-red-500/10 text-red-600 border-red-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-foreground text-background py-4 sticky top-0 z-50">
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl">MsgFlow</span>
          </Link>
          <Button variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              <Bell className="w-4 h-4" />
              Product Updates
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Changelog
            </h1>
            <p className="text-xl text-white/70">
              See what's new in MsgFlow. We're constantly improving and adding features to help you reach more customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Releases */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {releases.map((release, index) => (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="md:ml-20 bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${getTypeColor(release.type)}`}>
                        {getTypeIcon(release.type)}
                        {release.type.charAt(0).toUpperCase() + release.type.slice(1)}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">v{release.version}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{release.date}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground mb-4">
                      {release.title}
                    </h3>

                    <ul className="space-y-2">
                      {release.changes.map((change, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 text-center"
          >
            <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notified when we release new features and improvements.
            </p>
            <Button className="bg-primary hover:bg-primary/90 rounded-xl" asChild>
              <a href="https://msgflow.in/login" target="_blank" rel="noopener noreferrer">
                Sign Up for Updates
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container-custom text-center">
          <p className="text-muted-foreground">
            Have a feature request?{" "}
            <a href="mailto:support@msgflow.in" className="text-primary hover:underline">
              Let us know
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Changelog;
