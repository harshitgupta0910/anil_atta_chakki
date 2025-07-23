import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ShoppingCart,
  Star,
  Weight,
  Filter,
  Instagram,
  Facebook,
  Mail,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import attaImage from "@/assets/atta-flour.jpg";
import maidaImage from "@/assets/maida-flour.jpg";
import bean from "@/assets/besan.png";
import sattu from "@/assets/sattu.png";
import barley from "@/assets/barley.png";
import chana from "@/assets/chana.png";
import gehu from "@/assets/gehu.png";
import dal from "@/assets/dal.png";
import mas from "@/assets/mas.png";
import rice from "@/assets/rice.png";
import { motion } from "framer-motion";

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "Fresh Wheat Atta", image: attaImage, price: 45, unit: "kg", rating: 4.9, reviews: 234, description: "Ground fresh from premium wheat grains", category: "flour" },
    { id: 2, name: "Pure Maida", image: maidaImage, price: 55, unit: "kg", rating: 4.8, reviews: 156, description: "Fine quality refined flour for baking", category: "flour" },
    { id: 3, name: "Gram Flour (Besan)", image: bean, price: 85, unit: "kg", rating: 4.9, reviews: 189, description: "Pure chickpea flour, freshly ground", category: "flour" },
    { id: 4, name: "Sattu Powder", image: sattu, price: 95, unit: "kg", rating: 4.7, reviews: 124, description: "Nutritious roasted chana powder", category: "special" },
    { id: 5, name: "Barley Flour (Jau)", image: barley, price: 65, unit: "kg", rating: 4.6, reviews: 89, description: "Healthy barley flour for diet-conscious", category: "flour" },
    { id: 6, name: "Chana Atta", image: chana, price: 75, unit: "kg", rating: 4.8, reviews: 167, description: "Pure chickpea flour for healthy rotis", category: "flour" },
    { id: 7, name: "Custom Wheat Grinding", image: gehu, price: 5, unit: "kg", rating: 5.0, reviews: 342, description: "Bring your own wheat, we'll grind it fresh", category: "service" },
    { id: 8, name: "Custom Pulses Grinding", image: dal, price: 10, unit: "kg", rating: 4.9, reviews: 198, description: "Fresh grinding service for your pulses", category: "service" },
    { id: 9, name: "Custom Masala Grinding", image: mas, price: 10, unit: "kg", rating: 4.9, reviews: 198, description: "Fresh grinding service for your spices", category: "service" },
    { id: 10, name: "Fresh Rice Atta", image: rice, price: 50, unit: "kg", rating: 4.9, reviews: 234, description: "Ground fresh from premium rice grains", category: "flour" }
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "flour", label: "Ready Flour" },
    { value: "special", label: "Special Items" },
    { value: "service", label: "Grinding Services" },
  ];

  const filteredProducts = products
    .filter(product =>
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        default: return a.price - b.price;
      }
    });

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh flour and grinding services, made with traditional stone chakki
          </p>
        </motion.div>

        {/* Filter, Sort, Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Input */}
          <div className="flex items-center gap-2 w-full md:w-64">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className="product-card"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <Card className="overflow-hidden group">
                <div className="relative">
                  {product.category === "service" && (
                    <Badge className="absolute top-4 left-4 z-10 bg-wheat-gold text-chakki-brown">Service</Badge>
                  )}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-4 w-4 fill-wheat-gold text-wheat-gold" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-muted-foreground text-sm">per {product.unit}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Weight className="h-4 w-4 mr-1" /> Min 1kg
                    </div>
                  </div>
                  <Button className="w-full btn-chakki group" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found.</p>
          </div>
        )}
      </div>

      <footer className="bg-gradient-to-br from-[#C19A6B] to-[#8B5E3C] text-white py-10">
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
      </footer>
    </div>
  );
};

export default Products;
