import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import StoreProductCard from '../components/StoreProductCard';
import WishlistCard from '../components/WishlistCard';
import KeyFactsSection from '../components/KeyFactsSection';
import StoreFilters from '../components/StoreFilters';
import AssessmentCTA from '../components/AssessmentCTA';
import { productCategories } from '../data/productCategories';
import { products } from '../data/products';

export const Store: React.FC = () => {
  const { wishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [filters, setFilters] = useState({
    brand: [],
    priceRange: [0, 100],
    skinType: [],
    concerns: [],
  });

  const visibleCategories = productCategories.slice(startIndex, startIndex + 7);
  const hasMoreLeft = startIndex > 0;
  const hasMoreRight = startIndex + 7 < productCategories.length;

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(Math.min(productCategories.length - 7, startIndex + 1));
  };

  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === selectedCategory) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(categoryName);
      setSelectedSubcategory(null);
    }
  };

  const handleSubcategoryClick = (subcategoryName: string) => {
    setSelectedSubcategory(subcategoryName === selectedSubcategory ? null : subcategoryName);
  };

  const handleWishlistItemSelect = (category: string, subcategory: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    // Find the category index and update startIndex if necessary
    const categoryIndex = productCategories.findIndex(cat => cat.name === category);
    if (categoryIndex >= 0) {
      setStartIndex(Math.max(0, Math.min(categoryIndex, productCategories.length - 7)));
    }
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
      return false;
    }
    return true;
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const selectedCategoryData = selectedCategory 
    ? productCategories.find(cat => cat.name === selectedCategory)
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">SkinScience Store</h1>
      
      {wishlist.length > 0 ? (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Skin Treatments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlist.map((productName, index) => (
              <WishlistCard 
                key={index} 
                productName={productName} 
                onSelect={handleWishlistItemSelect}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="mb-16">
          <AssessmentCTA 
            title="Not sure what treatment you need for your skin?"
            buttonText="Make your skin and routine assessment"
          />
        </div>
      )}
      
      {/* Categories section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skin Care Product Categories</h2>
        <div className="relative px-12">
          <button
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full ${
              hasMoreLeft ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'text-gray-300 cursor-not-allowed'
            }`}
            disabled={!hasMoreLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-7 gap-4">
            {visibleCategories.map((category) => (
              <div
                key={category.id}
                className={`cursor-pointer text-center transition-transform duration-300 ${
                  selectedCategory === category.name ? 'scale-110' : ''
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="aspect-square rounded-full overflow-hidden mb-3 mx-auto">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className={`text-sm ${
                  selectedCategory === category.name 
                    ? 'font-semibold text-indigo-600' 
                    : 'text-gray-600'
                }`}>
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full ${
              hasMoreRight ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'text-gray-300 cursor-not-allowed'
            }`}
            disabled={!hasMoreRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Subcategories section */}
      {selectedCategoryData && (
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {selectedCategoryData.subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => handleSubcategoryClick(subcategory.name)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedSubcategory === subcategory.name
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } text-sm`}
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {selectedCategory && <KeyFactsSection category={selectedCategory} />}
      
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 mb-8 md:mb-0 md:mr-8">
          <StoreFilters filters={filters} onFilterChange={handleFilterChange} />
        </aside>
        
        <section className="w-full md:w-3/4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {selectedCategory 
              ? selectedSubcategory 
                ? `${selectedCategory} - ${selectedSubcategory}`
                : selectedCategory
              : 'All Products'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Store;