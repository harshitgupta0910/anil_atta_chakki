import { Button } from "@/components/ui/button";
import { ArrowRight, Wheat, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-chakki.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>

      {/* Optional Flour Particle Animation Layer */}
      <div className="absolute inset-0 flour-particles pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-accent-foreground mb-8 animate-gentle-pulse"
          >
            <Wheat className="h-4 w-4 mr-2" />
            Traditional Chakki Since 2000
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            <span className="block">Anil Atta</span>
            <span className="block text-primary">Chakki</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Pure, Fresh & Affordable — Straight from the Chakki to Your Kitchen
          </motion.p>

          {/* Owner Quote */}
          <motion.blockquote 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg italic text-foreground/80 mb-12 max-w-2xl mx-auto"
          >
            "We grind fresh flour daily using traditional stone chakki, preserving the natural nutrients and authentic taste that your family deserves."
            <footer className="text-primary font-medium mt-2">— Naveen Gupta, Owner</footer>
          </motion.blockquote>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a href="/products">
              <Button size="lg" className="btn-chakki group">
                Shop Fresh Flour
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <Button size="lg" variant="outline" className="btn-wheat">
              Custom Grinding Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                icon: <Wheat className="h-8 w-8 text-primary" />,
                title: "100% Natural",
                desc: "No preservatives or chemicals",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Daily Fresh",
                desc: "Ground fresh every morning",
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Trusted Quality",
                desc: "Serving families for decades",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Cue */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-gentle-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
