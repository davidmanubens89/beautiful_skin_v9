import React from 'react';
import { DollarSign, Heart } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { productCategories } from '../data/productCategories';

interface ProductCardProps {
  product: {
    name: string;
    image: string;
    description: string;
    benefits: string;
    reason?: string;
    monthlyPrice: number;
    importance: string;
    category: string;
    subcategory: string;
  };
  hideRecommendation?: boolean;
  isSelected?: boolean;
  onAddToRoutine?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  hideRecommendation = false, 
  isSelected = false,
  onAddToRoutine
}) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.name);

  // Find category and subcategory details
  const categoryData = productCategories.find(cat => cat.id === product.category);
  const subcategoryData = categoryData?.subcategories.find(sub => sub.id === product.subcategory);

  const displayName = `${categoryData?.name || ''} - ${subcategoryData?.name || ''}`;

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.name);
    } else {
      addToWishlist(product.name);
    }
  };

  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 ${isSelected ? 'ring-2 ring-indigo-500 shadow-lg' : ''}`}>
      <img src={product.image} alt={displayName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{displayName}</h3>
            <p className="text-sm text-gray-500">{categoryData?.name}</p>
          </div>
          <span className={`px-2 py-1 text-xs font-semibold rounded ${
            product.importance === 'High' ? 'bg-red-100 text-red-800' :
            product.importance === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {product.importance}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <h4 className="font-medium text-indigo-600 mb-2">Benefits:</h4>
        <p className="text-sm text-gray-600 mb-4">{product.benefits}</p>
        {!hideRecommendation && product.reason && (
          <>
            <h4 className="font-medium text-indigo-600 mb-2">Why it's recommended for you:</h4>
            <p className="text-sm text-gray-600 mb-4">{product.reason}</p>
          </>
        )}
        <div className="flex items-center mt-4 mb-4">
          <DollarSign className="w-5 h-5 text-gray-500 mr-1" />
          <span className="text-lg font-semibold text-gray-900">{product.monthlyPrice}</span>
          <span className="text-sm text-gray-500 ml-1">/month</span>
        </div>
        <div className="flex flex-col space-y-2">
          {onAddToRoutine && (
            <button 
              className={`w-full ${isSelected ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-4 py-2 rounded-md transition-colors`}
              onClick={onAddToRoutine}
            >
              {isSelected ? "Remove from Routine" : "Add to Routine"}
            </button>
          )}
          <button 
            className={`w-full flex items-center justify-center ${inWishlist ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-200 hover:bg-gray-300'} ${inWishlist ? 'text-white' : 'text-gray-800'} px-4 py-2 rounded-md transition-colors`}
            onClick={handleWishlistToggle}
          >
            <Heart className={`w-5 h-5 mr-2 ${inWishlist ? 'fill-current' : ''}`} />
            {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;