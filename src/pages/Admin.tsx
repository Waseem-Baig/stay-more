
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Package, Users, ShoppingCart, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageAnimations from '@/hooks/usePageAnimations';

// Sample credentials
const ADMIN_EMAIL = "admin@staymore.com";
const ADMIN_PASSWORD = "admin123";

// Sample orders data
const orders = [
  {
    id: "ORD-001",
    customer: "Priya Sharma",
    product: "Ultra Comfort Regular Pads",
    quantity: 3,
    amount: 599,
    status: "Delivered",
    date: "2023-04-01"
  },
  {
    id: "ORD-002",
    customer: "Divya Patel",
    product: "Maxi Night Pads",
    quantity: 2,
    amount: 450,
    status: "Processing",
    date: "2023-04-05"
  },
  {
    id: "ORD-003",
    customer: "Anjali Mehta",
    product: "Pantyliners",
    quantity: 5,
    amount: 750,
    status: "Shipped",
    date: "2023-04-07"
  },
  {
    id: "ORD-004",
    customer: "Sneha Reddy",
    product: "Ultra Comfort Regular Pads",
    quantity: 1,
    amount: 199,
    status: "Delivered",
    date: "2023-04-10"
  },
  {
    id: "ORD-005",
    customer: "Ritu Gupta",
    product: "Maxi Night Pads",
    quantity: 4,
    amount: 899,
    status: "Processing",
    date: "2023-04-12"
  }
];

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("orders");
  const { toast } = useToast();
  
  usePageAnimations();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
        variant: "default",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
      variant: "default",
    });
  };
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-staymore-light-purple/30 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg reveal fade-in-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-staymore-dark-purple">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@staymore.com"
                  required
                  className="w-full p-2 border rounded-md bg-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full p-2 border rounded-md bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Sample credentials: admin@staymore.com / admin123</p>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-staymore-magenta hover:bg-staymore-magenta/90 btn-ripple"
              >
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <Link to="/" className="text-sm text-staymore-purple hover:text-staymore-dark-purple">
              Return to Home
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-staymore-light-purple/10 to-white">
      <div className="p-4 bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-staymore-dark-purple">Stay More Admin</h1>
          <Button 
            onClick={handleLogout}
            variant="outline" 
            className="border-staymore-magenta text-staymore-magenta hover:bg-staymore-pink btn-morph"
          >
            Logout
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="reveal fade-in-up glass-card" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <h3 className="text-2xl font-bold text-staymore-dark-purple">125</h3>
              </div>
              <ShoppingCart className="h-10 w-10 text-staymore-magenta" />
            </CardContent>
          </Card>
          
          <Card className="reveal fade-in-up glass-card" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Customers</p>
                <h3 className="text-2xl font-bold text-staymore-dark-purple">86</h3>
              </div>
              <Users className="h-10 w-10 text-staymore-purple" />
            </CardContent>
          </Card>
          
          <Card className="reveal fade-in-up glass-card" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Products</p>
                <h3 className="text-2xl font-bold text-staymore-dark-purple">12</h3>
              </div>
              <Package className="h-10 w-10 text-staymore-bright-pink" />
            </CardContent>
          </Card>
          
          <Card className="reveal fade-in-up glass-card" style={{ animationDelay: '400ms' }}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <h3 className="text-2xl font-bold text-staymore-dark-purple">₹24,599</h3>
              </div>
              <DollarSign className="h-10 w-10 text-green-500" />
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
          <div className="p-4 border-b">
            <div className="flex space-x-4">
              <Button
                variant={activeTab === "orders" ? "default" : "ghost"}
                onClick={() => setActiveTab("orders")}
                className={activeTab === "orders" ? "bg-staymore-magenta hover:bg-staymore-magenta/90" : ""}
              >
                Orders
              </Button>
              <Button
                variant={activeTab === "products" ? "default" : "ghost"}
                onClick={() => setActiveTab("products")}
                className={activeTab === "products" ? "bg-staymore-magenta hover:bg-staymore-magenta/90" : ""}
              >
                Products
              </Button>
              <Button
                variant={activeTab === "customers" ? "default" : "ghost"}
                onClick={() => setActiveTab("customers")}
                className={activeTab === "customers" ? "bg-staymore-magenta hover:bg-staymore-magenta/90" : ""}
              >
                Customers
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            {activeTab === "orders" && (
              <Table>
                <TableCaption>Recent orders from customers</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} className="stagger-item">
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>₹{order.amount}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Delivered" ? "bg-green-100 text-green-800" :
                          order.status === "Shipped" ? "bg-blue-100 text-blue-800" : 
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            
            {activeTab === "products" && (
              <div className="text-center py-8">
                <p className="text-gray-500">Products management coming soon.</p>
              </div>
            )}
            
            {activeTab === "customers" && (
              <div className="text-center py-8">
                <p className="text-gray-500">Customer management coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
