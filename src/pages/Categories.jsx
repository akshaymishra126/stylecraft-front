import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, mockProducts } from '@/data/mockData';

export default function Categories() {
  const getCategoryProductCount = (categoryName) => {
    return mockProducts.filter(product => 
      product.category.toLowerCase().includes(categoryName.toLowerCase()) ||
      categoryName.toLowerCase() === 'all products'
    ).length;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h1>
        <p className="text-muted-foreground">
          Explore our diverse collection organized by category. Find exactly what you're looking for.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.name}`}
            className="group animate-fade-in hover-scale"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-subtle border-2 hover:border-primary/20">
              <div className="aspect-square bg-muted/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors duration-300 z-10">
                  {category.name.charAt(0)}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <Badge variant="secondary" className="animate-scale-in">
                    {getCategoryProductCount(category.name)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Discover our {category.name.toLowerCase()} collection
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Featured Categories */}
      <div className="mt-16 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6">Trending Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/products?category=T-Shirts" 
            className="group relative overflow-hidden rounded-lg bg-gradient-primary p-8 text-white hover-scale animate-scale-in"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Essential T-Shirts</h3>
              <p className="text-white/90 mb-4">Comfortable basics for every wardrobe</p>
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                Shop Now →
              </Badge>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </Link>

          <Link 
            to="/products?category=Dresses" 
            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-accent to-accent/80 p-8 text-white hover-scale animate-scale-in"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Elegant Dresses</h3>
              <p className="text-white/90 mb-4">Perfect for any special occasion</p>
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                Explore →
              </Badge>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}