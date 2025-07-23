import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Custom Grinding",
      description: "Bring your own grains and we'll grind them fresh using our traditional stone chakki",
      features: ["Wheat, Rice, Pulses", "Stone ground quality", "Same day service", "Your grains, our expertise"],
      price: "₹5 per kg",
      popular: true
    },
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Fresh flour delivered to your doorstep within a 2km radius around Shuklaganj.",
      features: ["Same day delivery", "Minimum order ₹200", "Free for orders above ₹500", "Contact-free delivery"],
      price: "₹20 delivery charge",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-pulse">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            More Than Just Flour
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive services to meet all your flour and grinding needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className={`card-warm relative transition-shadow shadow-lg ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground animate-pulse">
                      Popular
                    </Badge>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                          <Badge variant="secondary" className="text-xs">{service.price}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full btn-chakki">
                      {service.title === "Custom Grinding" ? "Book Grinding Service" :
                       service.title === "Home Delivery" ? "Order for Delivery" :
                       "Contact for Details"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto p-10 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-3xl border border-muted shadow-md">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're happy to discuss special requirements or custom orders. 
              Call us or visit our mill to explore more options.
            </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto">
  <a href="tel:+919236099338">
    <Button
      size="lg"
      className="btn-chakki w-full flex items-center justify-center gap-2"
    >
      <Phone className="w-5 h-5" />
      +91 92360 99338
    </Button>
  </a>
<a
  href="https://www.google.com/maps/place/Anil+Aata+Chakki/@26.4759752,80.38882,17z/data=!3m1!4b1!4m6!3m5!1s0x399c3f54a40b0ce7:0x7858450c2e24a9a7!8m2!3d26.4759752!4d80.38882!16s%2Fg%2F11gmw89hwj?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    variant="outline"
    className="btn-wheat w-full"
  >
    Visit Our Mill
  </Button>
</a>

 
</div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
