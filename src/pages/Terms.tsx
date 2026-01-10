import { motion } from "framer-motion";
import { MessageSquare, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
              <FileText className="w-4 h-4" />
              Legal
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
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
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using MsgFlow, you agree to be bound by these Terms of Service and all applicable 
                  laws and regulations. If you do not agree with any of these terms, you are prohibited from using 
                  or accessing this service.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MsgFlow is a SaaS platform that enables businesses to send WhatsApp messages using Meta's official 
                  WhatsApp Business API. We provide tools for campaign management, contact management, template 
                  creation, and analytics.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Account Registration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To use MsgFlow, you must:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Be at least 18 years old</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Have a valid WhatsApp Business account or phone number</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree NOT to use MsgFlow for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Sending spam or unsolicited messages</li>
                  <li>Harassment, abuse, or harm to others</li>
                  <li>Fraudulent or deceptive activities</li>
                  <li>Distributing malware or malicious content</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Sending messages without proper consent</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Message Templates</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All message templates must be approved by Meta before use. You are responsible for ensuring your 
                  templates comply with WhatsApp Business Policy and Meta's Commerce Policy. We reserve the right 
                  to reject or remove templates that violate these policies.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Billing and Payments</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MsgFlow operates on a pay-per-message model:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You must maintain a positive wallet balance to send messages</li>
                  <li>Messages are billed only upon successful delivery</li>
                  <li>Rates vary by message type and destination country</li>
                  <li>All payments are processed securely via Razorpay</li>
                  <li>Wallet balances are non-refundable except as required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. We may perform 
                  scheduled maintenance with advance notice. We are not liable for delays or failures caused by 
                  Meta's WhatsApp API or third-party services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MsgFlow and its original content, features, and functionality are owned by We Digital Services 
                  and are protected by international copyright, trademark, and other intellectual property laws. 
                  You retain ownership of content you create using our platform.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MsgFlow shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including loss of profits, data, or other intangible losses, resulting from your use 
                  of the service.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice, for any breach of 
                  these Terms. Upon termination, your right to use the service will cease immediately. You may 
                  export your data before termination.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify you of any changes by 
                  posting the new Terms of Service on this page and updating the "Last updated" date. Continued 
                  use after changes constitutes acceptance.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us at:{" "}
                  <a href="mailto:legal@msgflow.in" className="text-primary hover:underline">
                    legal@msgflow.in
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

export default Terms;
