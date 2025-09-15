import React, { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Percent, Clock, Star, Filter } from 'lucide-react';
import { ProductCard } from '@/components/Product/ProductCard';
import { mockProducts } from '@/data/mockData';

export default function Sale() {
  const [sortBy, setSortBy] = useState('discount');
  const [filterBy, setFilterBy] = useState('all');

  // Create sale products with discounts
  const saleProducts = useMemo(() => {
    return mockProducts.map(product => ({
      ...product,
      originalPrice: product.price,
      price: product.price * 0.7, // 30% off
      discount: 30,
      saleEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
    }));
  }, []);

  // Filter and sort sale products
  const filteredProducts = useMemo(() => {
    let filtered = [...saleProducts];

    // Filter by category
    if (filterBy !== 'all') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase().includes(filterBy.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'discount':
          return b.discount - a.discount;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [saleProducts, sortBy, filterBy]);

  const timeUntilSaleEnds = () => {
    const now = new Date();
    const saleEnd = saleProducts[0]?.saleEndDate;
    if (!saleEnd) return '';
    
    const diff = saleEnd.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return `${days}d ${hours}h`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Sale Banner */}
      <div className="mb-8 animate-fade-in">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-white mb-6">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Percent className="h-8 w-8 animate-pulse" />
              <Badge className="bg-white/20 text-white animate-scale-in">
                LIMITED TIME
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Big Sale Event
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Up to 30% off on all items. Don't miss out on these amazing deals!
            </p>
            <div className="flex items-center gap-4 text-lg font-semibold">
              <Clock className="h-5 w-5" />
              <span>Sale ends in: {timeUntilSaleEnds()}</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="text-center animate-scale-in bg-gradient-subtle border-0">
            <CardContent className="pt-6">
              <Percent className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">30% OFF</h3>
              <p className="text-sm text-muted-foreground">On all products</p>
            </CardContent>
          </Card>
          
          <Card className="text-center animate-scale-in bg-gradient-subtle border-0">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Best materials</p>
            </CardContent>
          </Card>
          
          <Card className="text-center animate-scale-in bg-gradient-subtle border-0">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Limited Time</h3>
              <p className="text-sm text-muted-foreground">Hurry up!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 animate-fade-in">
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="px-3 py-1">
            <Filter className="h-4 w-4 mr-2" />
            {filteredProducts.length} items on sale
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {/* Category Filter */}
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="t-shirts">T-Shirts</SelectItem>
              <SelectItem value="jeans">Jeans</SelectItem>
              <SelectItem value="dresses">Dresses</SelectItem>
              <SelectItem value="hoodies">Hoodies</SelectItem>
              <SelectItem value="blazers">Blazers</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="discount">Best Discount</SelectItem>
              <SelectItem value="price-low">Price Low-High</SelectItem>
              <SelectItem value="price-high">Price High-Low</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in hover-scale" style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative">
                <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white animate-pulse">
                  -{product.discount}%
                </Badge>
                <ProductCard product={product} showOriginalPrice={true} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-muted-foreground text-lg mb-4">
            No products found in this category.
          </p>
          <Button onClick={() => setFilterBy('all')}>
            Show All Sale Items
          </Button>
        </div>
      )}
    </div>
  );
}