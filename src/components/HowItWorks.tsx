import { Button } from "@/components/ui/button";
import { UserPlus, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up & Setup",
    description: "Create your account in 2 minutes. Add your business details and connect your WhatsApp number.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Create Campaign",
    description: "Upload contacts, choose template, and customize your message. Use Bolt Marketing for instant sending.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track & Grow",
    description: "Monitor delivery rates, read receipts, and ROI. Engage with customer replies in real-time.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get Started in
            <span className="text-gradient"> 3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signup to sending your first campaign in under 5 minutes
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <span className="px-4 py-2 bg-primary text-primary-foreground font-display font-bold text-sm rounded-full">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14"
            asChild
          >
            <a href="https://msgflow.in/register" target="_blank" rel="noopener noreferrer">
              Start Your Free Trial Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
