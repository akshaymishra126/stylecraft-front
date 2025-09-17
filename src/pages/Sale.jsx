import React, { useState, useEffect } from 'react';
import { ProductCard } from '@/components/Product/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/mockData';
import { Clock, Flame, Tag } from 'lucide-react';

export default function Sale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  // Create sale products with discounts
  const saleProducts = products.map(product => ({
    ...product,
    originalPrice: product.price,
    price: Math.round(product.price * 0.7), // 30% off
    discount: 30
  }));

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-destructive/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-destructive via-accent to-destructive p-12 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="h-8 w-8 text-yellow-400 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold">MEGA SALE</h1>
              <Flame className="h-8 w-8 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Up to 70% OFF on Premium Fashion
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                  <div className="text-2xl md:text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                  <div className="text-sm uppercase opacity-75">{unit}</div>
                </div>
              ))}
            </div>
            
            <Badge className="bg-yellow-400 text-black px-6 py-2 text-lg font-semibold animate-bounce">
              Limited Time Only!
            </Badge>
          </div>
          
          {/* Animated Elements */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
        </div>

        {/* Sale Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
            <Tag className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-accent">70%</h3>
            <p className="text-muted-foreground">Maximum Discount</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
            <Clock className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-accent">{saleProducts.length}</h3>
            <p className="text-muted-foreground">Items on Sale</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
            <Flame className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-accent">2 Days</h3>
            <p className="text-muted-foreground">Sale Remaining</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button className="bg-gradient-to-r from-accent to-destructive text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
            All Sale Items
          </Button>
          <Button variant="outline" className="px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
            50%+ Off
          </Button>
          <Button variant="outline" className="px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
            New Arrivals
          </Button>
          <Button variant="outline" className="px-6 py-2 rounded-full hover:scale-105 transition-all duration-300">
            Best Sellers
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saleProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Sale Badge */}
                <div className="absolute top-3 left-3 z-10 bg-destructive text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  -{product.discount}%
                </div>
                
                {/* Trending Badge for some items */}
                {index % 3 === 0 && (
                  <div className="absolute top-3 right-3 z-10 bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
                    🔥 HOT
                  </div>
                )}
                
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-accent/10 to-destructive/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            These incredible deals won't last forever. Shop now and save big on your favorite fashion items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-accent to-destructive text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300">
              Shop All Sale Items
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg rounded-full border-2 hover:scale-105 transition-all duration-300">
              Set Sale Alert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}