import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link, useLocation } from "react-router-dom";
import chakkiIcon from "@/assets/chakki-icon.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navigationItems = [
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const linkVariants = {
    hover: { scale: 1.05, color: "#B7791F" },
    tap: { scale: 0.95 },
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              src={chakkiIcon}
              alt="Anil Atta Chakki"
              className="h-10 w-10 rounded-full object-cover"
              whileHover={{ rotate: [0, 5, -5, 0], scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Anil Atta Chakki</h1>
              <p className="text-xs text-muted-foreground">Since 2000</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <motion.div key={item.name} whileHover="hover" whileTap="tap" variants={linkVariants}>
                <Link
                  to={item.href}
                  className={`font-medium transition-colors ${
                    location.pathname === item.href || (item.href.startsWith('/#') && location.pathname === '/')
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" className="hidden md:flex relative" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-wheat-gold text-chakki-brown">
                      {totalItems}
                    </Badge>
                  )}
                </Link>
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
                <Link to="/account">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background border-t shadow-lg z-40"
            >
              <div className="p-4 space-y-4">
                {navigationItems.map((item) => (
                  <motion.div key={item.name} whileHover="hover" whileTap="tap" variants={linkVariants}>
                    <Link
                      to={item.href}
                      className={`block py-2 font-medium transition-colors ${
                        location.pathname === item.href || (item.href.startsWith('/#') && location.pathname === '/')
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Action Buttons */}
                <div className="flex space-x-4 pt-4 border-t">
                  <Button variant="ghost" size="sm" className="flex-1 relative" asChild>
                    <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Cart
                      {totalItems > 0 && (
                        <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-wheat-gold text-chakki-brown">
                          {totalItems}
                        </Badge>
                      )}
                    </Link>
                  </Button>

                  <Button variant="ghost" size="sm" className="flex-1" asChild>
                    <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                      <User className="h-5 w-5 mr-2" />
                      Account
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
