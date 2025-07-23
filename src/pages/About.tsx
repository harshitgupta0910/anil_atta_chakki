import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Award, Users, Wheat , Instagram, Facebook, Mail } from "lucide-react";
import chakkiImage from "@/assets/hero-chakki.jpg";
import owner from "@/assets/owner.jpg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="min-h-screen bg-background pt-20"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Chakki
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over twenty years, we've been serving fresh, pure flour to families in Shuklaganj, 
            preserving traditional methods while embracing quality and trust.
          </p>
        </motion.div>

        {/* Owner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div variants={fadeUp} className="space-y-6 pt-20">
            <h2 className="text-3xl font-bold text-foreground mb-4"> Naveen Gupta</h2>
            <p className="text-muted-foreground mb-4">
              The owner of Anil Atta Chakki, he has dedicated his life to providing 
              the highest quality flour to our community. Following in his family's footsteps, 
              he ensures every grain is ground to perfection using traditional stone chakki methods.
            </p>
            <p className="text-muted-foreground mb-6">
              "गुणवत्ता कोई संयोग नहीं है। यह बुद्धिमान प्रयास, उचित योजना और उत्कृष्टता के प्रति ईमानदार प्रतिबद्धता का परिणाम है।" - नवीन गुप्ता
            </p>
            <br />
            <a href="tel:+919236099338">
              <Button className="btn-chakki">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative w-full max-w-md mx-auto my-6 hover:scale-105 transition-transform duration-500"
          >
            <img
              src={owner}
              alt="Owner"
              className="w-full h-[450px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[{
            Icon: Users,
            title: "5000+",
            text: "Happy Families Served"
          }, {
            Icon: Award,
            title: "25",
            text: "Years of Excellence"
          }, {
            Icon: Wheat,
            title: "100%",
            text: "Pure & Fresh"
          }].map(({ Icon, title, text }, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-wheat-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-wheat-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div variants={fadeUp} className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-lg">
            <p>
              Established in 2000, Anil Atta Chakki began as a small family business with a simple mission: 
              to provide the freshest, purest flour to our local community.
            </p>
            <p>
              Our commitment to traditional grinding methods using stone chakki ensures that every grain 
              retains its natural nutrients and authentic taste.
            </p>
          </div>
        </motion.div>

        {/* Location & Hours */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ... no change to content, just animation wrapper ... */}
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeUp} className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
              question: "Do you offer home delivery?",
              answer: "Yes, we provide home delivery within Unnao city. Minimum order quantity applies."
            }, {
              question: "Can I bring my own grains for grinding?",
              answer: "Absolutely! We offer custom grinding services for wheat, chana, and other grains."
            }, {
              question: "What are your payment options?",
              answer: "We accept cash, UPI payments, and all major cards for your convenience."
            }, {
              question: "How fresh is your flour?",
              answer: "Our flour is ground fresh daily using traditional stone chakki to preserve nutrients."
            }].map(({ question, answer }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{question}</h3>
                    <p className="text-muted-foreground">{answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer variants={fadeUp} className="bg-gradient-to-br from-[#C19A6B] to-[#8B5E3C] text-white py-10">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex gap-6">
  <motion.a
    href="https://www.instagram.com/naveengupta520?igsh=NTdpMDBzdm5iaGZm"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    className="hover:text-white/80 transition"
  >
    <Instagram size={24} />
  </motion.a>

  <motion.a
    href="https://www.facebook.com/share/14K9kYeF8oF/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    className="hover:text-white/80 transition"
  >
    <Facebook size={24} />
  </motion.a>

  <motion.a
    href="mailto:naveenguptastore902@gmail.com"
    whileHover={{ scale: 1.1 }}
    className="hover:text-white/80 transition"
  >
    <Mail size={24} />
  </motion.a>
</div>

          <div className="border-t border-white/30 w-full pt-6 text-center text-white/70 text-sm">
            <p>&copy; 2025 Anil Atta Chakki. All rights reserved.</p>
            <p>Made by Harshit</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default About;