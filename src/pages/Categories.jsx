import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, products } from '@/data/mockData';
import { ProductCard } from '@/components/Product/ProductCard';
import { Button } from '@/components/ui/button';

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Explore Categories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections designed for every style and occasion
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
          <Button
            onClick={() => setSelectedCategory('all')}
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className="px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            All Categories
          </Button>
          {categories.slice(1).map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className="px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {categories.slice(1).map((category) => (
            <div 
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 h-32 flex items-center justify-center relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg font-semibold text-center relative z-10 group-hover:text-accent transition-colors duration-300">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-muted-foreground text-lg ml-2">({filteredProducts.length} items)</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-muted-foreground">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">Try selecting a different category</p>
            <Button onClick={() => setSelectedCategory('all')} className="btn-accent">
              View All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}