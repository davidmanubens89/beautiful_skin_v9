import React from 'react';
import { X } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { productCategories } from '../data/productCategories';

interface WishlistCardProps {
  productName: string;
  onSelect?: (category: string, subcategory: string) => void;
}

const WishlistCard: React.FC<WishlistCardProps> = ({ productName, onSelect }) => {
  const { removeFromWishlist } = useWishlist();
  
  // Parse category and subcategory from product name
  const [category, subcategory] = productName.split(' - ');
  
  // Find category and subcategory details
  const categoryData = productCategories.find(cat => cat.name === category);
  const subcategoryData = categoryData?.subcategories.find(sub => sub.name === subcategory);

  const handleClick = () => {
    if (onSelect && category && subcategory) {
      onSelect(category, subcategory);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when removing
    removeFromWishlist(productName);
  };

  return (
    <div 
      className="bg-white shadow-sm rounded-lg p-3 flex items-center cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={handleClick}
    >
      <img 
        src={categoryData?.image || 'https://via.placeholder.com/50'} 
        alt={category}
        className="w-12 h-12 rounded-md object-cover mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-sm font-medium text-gray-900">{category}</h3>
        <p className="text-xs text-gray-500">{subcategory}</p>
      </div>
      <button
        onClick={handleRemove}
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
      </button>
    </div>
  );
};

export default WishlistCard;