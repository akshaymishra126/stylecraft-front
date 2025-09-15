import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // This would typically open a quick add modal or add with default options
    console.log('Quick add:', product.name);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Add to wishlist:', product.name);
  };

  return (
    <Card className="product-card group relative">
      <Link to={`/product/${product.id}`}>
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="product-image relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full"
                onClick={handleAddToWishlist}
                aria-label="Add to wishlist"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full"
                onClick={handleQuickAdd}
                aria-label="Quick add to cart"
              >
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </div>

            {/* Sale Badge */}
            {product.featured && (
              <div className="absolute top-3 left-3">
                <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="mb-2">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                {product.category}
              </span>
            </div>
            
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              
              {/* Color Options Preview */}
              <div className="flex gap-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                     color.toLowerCase() === 'black' ? '#000000' :
                                     color.toLowerCase() === 'navy' ? '#001f3f' :
                                     color.toLowerCase() === 'gray' || color.toLowerCase() === 'grey' ? '#6c757d' :
                                     '#d1d5db'
                    }}
                    title={color}
                  />
                ))}
                {product.colors.length > 3 && (
                  <div className="w-4 h-4 rounded-full border border-border bg-muted flex items-center justify-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      +{product.colors.length - 3}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}