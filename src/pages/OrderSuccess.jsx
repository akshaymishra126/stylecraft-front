import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function OrderSuccess() {
  const orderNumber = `SH${Date.now().toString().slice(-6)}`;
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for shopping with StyleHub
          </p>
        </div>

        {/* Order Details */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span>Order #{orderNumber}</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>Confirmation sent to your email</span>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Estimated Delivery</h3>
                <p className="text-lg font-medium text-accent">{estimatedDelivery}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  We'll send you tracking information once your order ships
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">What happens next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-2">
                1
              </div>
              <h3 className="font-medium mb-1">Order Processing</h3>
              <p className="text-muted-foreground">We're preparing your items</p>
            </div>
            
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-2">
                2
              </div>
              <h3 className="font-medium mb-1">Shipping</h3>
              <p className="text-muted-foreground">Your order is on its way</p>
            </div>
            
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-2">
                3
              </div>
              <h3 className="font-medium mb-1">Delivery</h3>
              <p className="text-muted-foreground">Enjoy your new items!</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products">
            <Button className="btn-accent">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Receipt
          </Button>
        </div>

        {/* Support */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our customer support team is here to assist you with any questions about your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link to="/contact">
              <Button variant="outline" size="sm">Contact Support</Button>
            </Link>
            <Link to="/faq">
              <Button variant="ghost" size="sm">View FAQ</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}