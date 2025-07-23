// Contact.tsx (Enhanced with Framer Motion)
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_kxbaj3p",
        "template_5jrti9p",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_subject: formData.subject,
          message: formData.message,
        },
        "BoVOKp77hAWsKBdAt"
      )
      .then(
        () => {
          toast({ title: "Message sent!", description: "We'll get back to you within 1 hour." });
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        () => {
          toast({ title: "Failed to send", description: "Please try again later." });
        }
      );
  };

  const handleWhatsApp = () => window.open("https://wa.me/919236099338?text=Hello%20Anil%20Atta%20Chakki", "_blank");
  const handleCall = () => window.open("tel:+919236099338");

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for fresh flour, custom grinding, or any questions
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Card className="h-auto self-start">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6 !pb-5">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} />
                  </div>
                  <Button type="submit" className="w-full btn-chakki">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[{
                    icon: <MapPin className="h-6 w-6 text-wheat-gold mt-1" />, label: "Address", text: "12/313 Gandhi Nagar, Near Om Vidya Mandir School\nShuklaganj, Unnao, Uttar Pradesh"
                  }, {
                    icon: <Phone className="h-6 w-6 text-wheat-gold mt-1" />, label: "Phone", text: "+91 92360 99338"
                  }, {
                    icon: <Mail className="h-6 w-6 text-wheat-gold mt-1" />, label: "Email", text: "naveenguptastore902@gmail.com"
                  }, {
                    icon: <Clock className="h-6 w-6 text-wheat-gold mt-1" />, label: "Business Hours", text: "Monday - Sunday: 8:00 AM - 9:00 PM"
                  }].map((info, i) => (
                    <div className="flex items-start space-x-4" key={i}>
                      {info.icon}
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{info.text}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex space-x-4 pt-4">
                    <Button onClick={handleCall} className="flex-1 btn-chakki">
                      <Phone className="mr-2 h-4 w-4" />Call Now
                    </Button>
                    <Button onClick={handleWhatsApp} variant="outline" className="flex-1 btn-wheat">
                      <MessageCircle className="mr-2 h-4 w-4" />WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="col-span-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    title="Anil Atta Chakki Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2fUKpE0VaqwZuamoFn6X3RA_4-LwHtBI&q=Anil+Aata+Chakki,Kanpur,Uttar+Pradesh"
                  ></iframe>
                </div>
                <a
                  href="https://www.google.com/maps/place/Anil+Aata+Chakki/@26.4759752,80.38882,17z/data=!3m1!4b1!4m6!3m5!1s0x399c3f54a40b0ce7:0x7858450c2e24a9a7!8m2!3d26.4759752!4d80.38882!16s%2Fg%2F11gmw89hwj?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full mt-4 btn-wheat">Open in Google Maps</Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.footer
        className="bg-gradient-to-br from-[#C19A6B] to-[#8B5E3C] text-white py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex gap-6">
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
          </div>
          <div className="border-t border-white/30 w-full pt-6 text-center text-white/70 text-sm">
            <p>&copy; 2025 Anil Atta Chakki. All rights reserved.</p>
            <p>Made by Harshit</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Contact;
