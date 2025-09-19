import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/Product/ProductCard';
import { mockProducts } from '@/data/mockData';
import heroImage from '@/assets/hero-fashion.jpg';

export default function Home() {
  const featuredProducts = mockProducts.filter(product => product.featured);

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Cutting-Edge Fashion",
      description: "Next-generation designs that blend technology with style"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Crafted with the finest materials and attention to detail"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Free shipping worldwide with express delivery options"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particles-bg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 matrix-text floating-animation">
              VELORA
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground animate-glow">
              Experience the Future of Fashion
            </p>
            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
              Where cutting-edge technology meets timeless style. Discover our collection of premium clothing designed for the next generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/products">
                <Button className="btn-cyber text-lg px-8 py-4 cyber-glow">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/sale">
                <Button className="btn-accent text-lg px-8 py-4 pulse-neon">
                  Limited Sale
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center holographic-bg p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center holographic-bg p-4 rounded-lg">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Premium Products</div>
              </div>
              <div className="text-center holographic-bg p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 matrix-text">
              Why Choose VELORA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing fashion with innovative designs and uncompromising quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="neon-border hover:cyber-glow transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-accent mb-4 flex justify-center floating-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 matrix-text">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium fashion pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in floating-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button className="btn-cyber px-8 py-4">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 holographic-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 matrix-text">
              Stay Ahead of Fashion
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get exclusive access to new collections, special offers, and fashion insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-elegant flex-1 neon-border"
              />
              <Button className="btn-accent px-6 pulse-neon">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Join 10,000+ fashion enthusiasts already subscribed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}