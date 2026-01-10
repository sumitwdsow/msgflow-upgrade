import { Star, Users, MessageSquare, ThumbsUp, Clock } from "lucide-react";

const testimonials = [
  {
    quote: "MsgFlow transformed our WhatsApp marketing. The Bolt Marketing feature saves us hours every week!",
    author: "Rajesh Kumar",
    role: "Marketing Head",
    company: "RetailPro India",
    avatar: "R",
  },
  {
    quote: "Best WhatsApp Business platform in India. Easy to use, reliable, and excellent support team.",
    author: "Priya Sharma",
    role: "CEO",
    company: "EduTech Solutions",
    avatar: "P",
  },
  {
    quote: "The campaign analytics and message tracking features are exactly what we needed. Highly recommended!",
    author: "Amit Patel",
    role: "Operations Manager",
    company: "LogisticsPro",
    avatar: "A",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: MessageSquare, value: "5M+", label: "Messages Sent" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Businesses
            <span className="text-gradient"> Across India</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about MsgFlow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
