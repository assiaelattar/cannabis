
import React from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isSale && (
            <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Sale</span>
          )}
          {product.isSoldOut && (
            <span className="bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Sold Out</span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
          <button className="bg-white p-2.5 rounded-full text-slate-900 hover:bg-emerald-600 hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-white p-2.5 rounded-full text-slate-900 hover:bg-emerald-600 hover:text-white transition-colors">
             <Eye className="w-5 h-5" />
          </button>
          {!product.isSoldOut && (
            <button className="bg-white p-2.5 rounded-full text-slate-900 hover:bg-emerald-600 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < product.rating ? 'text-amber-400 fill-current' : 'text-slate-300'}`} />
          ))}
        </div>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">{product.name}</h3>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-emerald-600">€{product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-slate-400 line-through">€{product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
