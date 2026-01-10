import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart3, CheckCircle, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Official Meta Business Partner</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
              WhatsApp
              <span className="text-gradient block">Marketing Platform</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up delay-100">
              Send thousands of messages instantly with <span className="text-primary font-semibold">Bolt Marketing</span>. 
              Powered by Meta's WhatsApp Business API.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-slide-up delay-200">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 glow-primary"
                asChild
              >
                <a href="https://msgflow.in/register" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 text-lg px-8 h-14"
                asChild
              >
                <a href="#contact">
                  <Play className="mr-2 w-5 h-5" />
                  Book a Demo
                </a>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 animate-slide-up delay-300">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient">500+</div>
                <div className="text-sm text-white/60">Businesses</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient">5M+</div>
                <div className="text-sm text-white/60">Messages</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient">99.9%</div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8 animate-slide-up delay-400">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>5-min setup</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative lg:pl-8 animate-slide-up delay-200">
            <div className="relative">
              {/* Live Badge */}
              <div className="absolute -top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-lg">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Live</span>
              </div>

              {/* Main Dashboard Card */}
              <div className="glass-card rounded-2xl p-6 floating-animation">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-sm text-white/60">Messages/Min</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-white/60">Delivery</div>
                  </div>
                </div>

                {/* Bolt Marketing Feature */}
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-4 border border-primary/30 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-white">Bolt Marketing</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-white/80">
                      <Zap className="w-4 h-4 text-primary" />
                      Lightning fast delivery
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      Real-time analytics
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Instant confirmation
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-white/60 mb-2">
                    <span>Campaign Progress</span>
                    <span>1,000/1,000</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Success Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                    <div className="text-xl font-bold text-foreground">99.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
