import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is MsgFlow?",
    answer: "MsgFlow is a SaaS platform designed to simplify WhatsApp Business Messaging. Using Meta's official WhatsApp Business API, we help businesses send campaigns, manage conversations, and scale customer engagement securely and reliably.",
    category: "General",
  },
  {
    question: "How do I start using MsgFlow?",
    answer: "Getting started is simple! Sign up for a free account, connect your WhatsApp Business number, and you can start sending campaigns within 5 minutes. Our onboarding wizard will guide you through the entire process.",
    category: "Getting Started",
  },
  {
    question: "How is MsgFlow billing done?",
    answer: "MsgFlow uses a wallet-based system. You add credits to your wallet, and messages are debited automatically as you send them. This gives you full control over your spending with no surprise charges.",
    category: "Billing",
  },
  {
    question: "Does MsgFlow support inbound customer chats?",
    answer: "Yes! MsgFlow includes a full inbox feature for managing 24-hour session conversations. You can respond to customer queries, manage multiple conversations, and track all interactions in one place.",
    category: "Features",
  },
  {
    question: "Is MsgFlow secure and compliant?",
    answer: "Absolutely. MsgFlow is built on Meta's official WhatsApp Business API with enterprise-grade security. We use encrypted tokens, maintain comprehensive audit logs, and follow all Meta compliance guidelines.",
    category: "Security",
  },
  {
    question: "What is Bolt Marketing?",
    answer: "Bolt Marketing is our unique instant campaign sending feature. Unlike traditional scheduling, Bolt sends your campaigns immediately with a single click, making it the fastest WhatsApp marketing solution available.",
    category: "Features",
  },
  {
    question: "Can I integrate MsgFlow with my existing systems?",
    answer: "Yes! MsgFlow offers comprehensive API access for enterprise plans. You can integrate with your CRM, e-commerce platform, or any custom system using our REST APIs and webhooks.",
    category: "Integration",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className="text-gradient block mt-2">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about MsgFlow
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group bg-card rounded-2xl border border-border px-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 data-[state=open]:shadow-lg data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-6 group-hover:text-primary transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-12 leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 via-card to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 rounded-xl"
                asChild
              >
                <a href="#contact">
                  Contact Support
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 rounded-xl"
                asChild
              >
                <a href="https://wa.me/917887260099" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;