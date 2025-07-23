import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Weight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import attaImage from "@/assets/atta-flour.jpg";
import maidaImage from "@/assets/maida-flour.jpg";
import besan from "@/assets/besan.png";

const products = [
  {
    id: 1,
    name: "Fresh Wheat Atta",
    image: attaImage,
    price: 40,
    unit: "kg",
    rating: 4.9,
    reviews: 234,
    isPopular: true,
    description: "Ground fresh daily from premium wheat grains",
  },
  {
    id: 2,
    name: "Pure Maida",
    image: maidaImage,
    price: 45,
    unit: "kg",
    rating: 4.8,
    reviews: 156,
    isPopular: false,
    description: "Fine quality refined flour for baking",
  },
  {
    id: 3,
    name: "Gram Flour (Besan)",
    image: besan,
    price: 85,
    unit: "kg",
    rating: 4.9,
    reviews: 189,
    isPopular: true,
    description: "Pure chickpea flour, freshly ground",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Fresh Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Popular Flours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Freshly ground using traditional stone chakki, preserving natural nutrients and authentic taste
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition duration-300 rounded-xl">
                <div className="relative">
                  {product.isPopular && (
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute top-4 left-4 z-10"
                    >
                      <Badge className="bg-yellow-400 text-black font-bold shadow-md">
                        Popular
                      </Badge>
                    </motion.div>
                  )}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xl font-bold text-primary">
                      ₹{product.price}
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        /{product.unit}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Weight className="h-4 w-4 mr-1" />
                      Min 1kg
                    </div>
                  </div>

                  <Button
                    className="w-full mt-4 transition-transform transform hover:scale-105"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button variant="outline" size="lg" className="btn-wheat" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
