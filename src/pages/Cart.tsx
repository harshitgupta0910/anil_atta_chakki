import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, CreditCard } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: ""
  });

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const itemDetails = items
      .map((item) => `${item.name} x ${item.quantity}kg = ₹${item.price * item.quantity}`)
      .join("\n");

    const templateParams = {
      name: orderData.name,
      phone: orderData.phone,
      email: orderData.email || "Not Provided",
      address: orderData.address,
      notes: orderData.notes || "None",
      items: itemDetails,
      total: `₹${totalPrice}`,
    };

    emailjs.send("service_uvvfiu7", "template_ica8ifp", templateParams, "uz5xGrmeNtzujrmgb")
      .then(() => {
        toast({
          title: "Order placed successfully!",
          description: "You will receive a confirmation call within 30 minutes.",
        });
        clearCart();
        setIsCheckingOut(false);
        setOrderData({
          name: "",
          phone: "",
          email: "",
          address: "",
          notes: ""
        });
      })
      .catch((error) => {
        toast({
          title: "Order failed",
          description: "Unable to send email. Please try again.",
          variant: "destructive",
        });
        console.error("EmailJS Error:", error);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };
  if (items.length === 0 && !isCheckingOut) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Add some fresh flour to your cart to get started
            </p>
            <Link to="/products">
              <Button className="btn-chakki">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isCheckingOut) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <CreditCard className="mr-2 h-6 w-6" />
                Checkout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePlaceOrder} className="space-y-6">
                {/* Order Summary */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x {item.quantity}kg</span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{totalPrice}</span>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Customer Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={orderData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={orderData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 **********"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={orderData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={orderData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Complete delivery address"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsCheckingOut(false)}
                    className="flex-1"
                  >
                    Back to Cart
                  </Button>
                  <Button type="submit" className="flex-1 btn-chakki">
                    Place Order
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <p className="text-lg font-bold text-primary mt-1">
                        ₹{item.price} per {item.unit}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-lg font-semibold min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">
                        ₹{item.price * item.quantity}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>

                <div className="space-y-2">
                  <Button onClick={handleCheckout} className="w-full btn-chakki">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground pt-4">
                  <p>• Free delivery on orders above ₹500</p>
                  <p>• Cash on delivery available</p>
                  <p>• Fresh grinding guaranteed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;