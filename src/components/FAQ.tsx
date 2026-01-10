import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MsgFlow?",
    answer: "MsgFlow is a SaaS platform designed to simplify WhatsApp Business Messaging. Using Meta's official WhatsApp Business API, we help businesses send campaigns, manage conversations, and scale customer engagement securely and reliably.",
  },
  {
    question: "How do I start using MsgFlow?",
    answer: "Getting started is simple! Sign up for a free account, connect your WhatsApp Business number, and you can start sending campaigns within 5 minutes. Our onboarding wizard will guide you through the entire process.",
  },
  {
    question: "How is MsgFlow billing done?",
    answer: "MsgFlow uses a wallet-based system. You add credits to your wallet, and messages are debited automatically as you send them. This gives you full control over your spending with no surprise charges.",
  },
  {
    question: "Does MsgFlow support inbound customer chats?",
    answer: "Yes! MsgFlow includes a full inbox feature for managing 24-hour session conversations. You can respond to customer queries, manage multiple conversations, and track all interactions in one place.",
  },
  {
    question: "Is MsgFlow secure and compliant?",
    answer: "Absolutely. MsgFlow is built on Meta's official WhatsApp Business API with enterprise-grade security. We use encrypted tokens, maintain comprehensive audit logs, and follow all Meta compliance guidelines.",
  },
  {
    question: "What is Bolt Marketing?",
    answer: "Bolt Marketing is our unique instant campaign sending feature. Unlike traditional scheduling, Bolt sends your campaigns immediately with a single click, making it the fastest WhatsApp marketing solution available.",
  },
  {
    question: "Can I integrate MsgFlow with my existing systems?",
    answer: "Yes! MsgFlow offers comprehensive API access for enterprise plans. You can integrate with your CRM, e-commerce platform, or any custom system using our REST APIs and webhooks.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about MsgFlow
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
