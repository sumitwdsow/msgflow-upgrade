import { motion } from "framer-motion";
import { MessageSquare, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
      <section className="py-16 hero-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Legal
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/70">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MsgFlow, operated by We Digital Services, is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our WhatsApp 
                  Business Messaging platform.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Account information (name, email, phone number)</li>
                  <li>Business information (company name, industry)</li>
                  <li>Payment information (processed securely via Razorpay)</li>
                  <li>Message content and templates you create</li>
                  <li>Contact lists you upload for messaging campaigns</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send WhatsApp messages on your behalf</li>
                  <li>Provide customer support</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against 
                  unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at 
                  rest using industry-standard encryption protocols.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was 
                  collected, including to satisfy legal, accounting, or reporting requirements. Message logs are 
                  retained for 90 days by default.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use Meta's WhatsApp Business API to deliver messages. Your use of our service is also subject to 
                  Meta's Privacy Policy. We use Razorpay for payment processing, which has its own privacy policy 
                  governing payment data.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:{" "}
                  <a href="mailto:privacy@msgflow.in" className="text-primary hover:underline">
                    privacy@msgflow.in
                  </a>
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  We Digital Services<br />
                  Registered in India<br />
                  Official Meta Business Partner
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container-custom text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} MsgFlow by We Digital Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
