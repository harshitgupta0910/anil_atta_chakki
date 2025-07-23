import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Services from "@/components/Services";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Facebook, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LoadingSpinner text={`Radha Swami Ji,\nWelcome to Anil Atta Chakki`} />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FeaturedProducts />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Services />
        </motion.div>
      </main>

      <motion.footer
        className="bg-gradient-to-br from-[#C19A6B] to-[#8B5E3C] text-white py-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <motion.div className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://www.instagram.com/naveengupta520?igsh=NTdpMDBzdm5iaGZm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/14K9kYeF8oF/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="mailto:naveenguptastore902@gmail.com"
              className="hover:text-white/80 transition"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <div className="border-t border-white/30 w-full pt-6 text-center text-white/70 text-sm">
            <p>&copy; 2025 Anil Atta Chakki. All rights reserved.</p>
            <p>Made by Harshit</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
