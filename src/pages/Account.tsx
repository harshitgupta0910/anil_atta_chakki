import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Package, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.3 } },
};

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Example User",
    email: "example.user@email.com",
    phone: "+91 99999 99999",
    address: "XYZ Street, City, State - 123456",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      items: ["Fresh Wheat Atta (5kg)", "Besan (2kg)"],
      total: 355,
      status: "Delivered",
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      items: ["Pure Maida (3kg)", "Custom Grinding"],
      total: 195,
      status: "Delivered",
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      items: ["Sattu Powder (1kg)"],
      total: 95,
      status: "Processing",
    },
  ];

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated!",
      description: "Your profile information has been saved.",
    });
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-foreground mb-8">My Account</h1>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              {activeTab === "profile" && (
                <TabsContent value="profile" forceMount>
                  <motion.div {...fadeIn}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <User className="mr-2 h-5 w-5" />
                          Profile Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {["name", "phone", "email", "address"].map((field, i) => (
                            <motion.div
                              key={field}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Label htmlFor={field}>
                                {field === "name"
                                  ? "Full Name"
                                  : field === "phone"
                                  ? "Phone Number"
                                  : field === "email"
                                  ? "Email Address"
                                  : "Primary Address"}
                              </Label>
                              <Input
                                id={field}
                                name={field}
                                value={(userInfo as any)[field]}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                              />
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.div className="flex space-x-4">
                          {isEditing ? (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSaveProfile}
                              >
                                <Button className="btn-chakki">Save Changes</Button>
                              </motion.button>
                              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" onClick={() => setIsEditing(false)}>
                                  Cancel
                                </Button>
                              </motion.button>
                            </>
                          ) : (
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button onClick={() => setIsEditing(true)} className="btn-chakki">
                                Edit Profile
                              </Button>
                            </motion.button>
                          )}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              )}

              {activeTab === "orders" && (
                <TabsContent value="orders" forceMount>
                  <motion.div {...fadeIn}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Package className="mr-2 h-5 w-5" />
                          Order History
                        </CardTitle>
                      </CardHeader>
                      {/* <CardContent>
                        <div className="space-y-4">
                          {orders.map((order, index) => (
                            <motion.div
                              key={order.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.15 }}
                            >
                              <Card className="border border-border/50 hover:shadow-md transition">
                                <CardContent className="p-6">
                                  <div className="flex justify-between items-start mb-4">
                                    <div>
                                      <h3 className="font-semibold text-foreground">
                                        Order #{order.id}
                                      </h3>
                                      <p className="text-sm text-muted-foreground flex items-center">
                                        <Calendar className="mr-1 h-4 w-4" />
                                        {new Date(order.date).toLocaleDateString()}
                                      </p>
                                    </div>
                                    <Badge className={getStatusColor(order.status)}>
                                      {order.status}
                                    </Badge>
                                  </div>

                                  <div className="space-y-2 mb-4">
                                    {order.items.map((item, idx) => (
                                      <p key={idx} className="text-sm text-muted-foreground">
                                        • {item}
                                      </p>
                                    ))}
                                  </div>

                                  <div className="flex justify-between items-center">
                                    <span className="font-semibold">Total: ₹{order.total}</span>
                                    <div className="space-x-2">
                                      <motion.button whileHover={{ scale: 1.05 }}>
                                        <Button variant="outline" size="sm">
                                          View Details
                                        </Button>
                                      </motion.button>
                                      {order.status === "Delivered" && (
                                        <motion.button whileHover={{ scale: 1.05 }}>
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            className="btn-wheat"
                                          >
                                            Reorder
                                          </Button>
                                        </motion.button>
                                      )}
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>

                        {orders.length === 0 && (
                          <div className="text-center py-8">
                            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">No orders yet</p>
                          </div>
                        )}
                      </CardContent> */}
                    </Card>
                  </motion.div>
                </TabsContent>
              )}
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
