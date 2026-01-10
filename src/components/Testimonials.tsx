import { motion } from "framer-motion";
import { Star, Users, MessageSquare, ThumbsUp, Clock, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MsgFlow transformed our WhatsApp marketing. The Bolt Marketing feature saves us hours every week!",
    author: "Rajesh Kumar",
    role: "Marketing Head",
    company: "RetailPro India",
    avatar: "R",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote: "Best WhatsApp Business platform in India. Easy to use, reliable, and excellent support team.",
    author: "Priya Sharma",
    role: "CEO",
    company: "EduTech Solutions",
    avatar: "P",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote: "The campaign analytics and message tracking features are exactly what we needed. Highly recommended!",
    author: "Amit Patel",
    role: "Operations Manager",
    company: "LogisticsPro",
    avatar: "A",
    rating: 5,
    gradient: "from-primary to-accent",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients", gradient: "from-blue-500 to-cyan-500" },
  { icon: MessageSquare, value: "5M+", label: "Messages Sent", gradient: "from-primary to-accent" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction", gradient: "from-purple-500 to-pink-500" },
  { icon: Clock, value: "24/7", label: "Support", gradient: "from-orange-500 to-red-500" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

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
            <Star className="w-4 h-4 fill-current" />
            Customer Stories
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Businesses
            <span className="text-gradient block mt-2">Across India</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about MsgFlow
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-full bg-card rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`absolute -top-4 right-8 w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}
                >
                  <Quote className="w-5 h-5 text-white" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <span className="font-display font-bold text-white text-lg">
                      {testimonial.avatar}
                    </span>
                  </motion.div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-card rounded-3xl border border-border p-8 shadow-xl overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                  className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;