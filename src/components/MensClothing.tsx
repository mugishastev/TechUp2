// MensClothing.tsx
import React from "react";

// --- Types ---
interface MensClothingProps {
  selectedCategory: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}

// --- Subcategory Card Component ---
interface SubcategoryCardProps {
  name: string;
  onClick?: () => void;
}

const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center cursor-pointer"
    >
      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-sm font-semibold text-gray-600">{name[0]}</span>
      </div>
      <h3 className="font-semibold text-black">{name}</h3>
    </div>
  );
};

// --- Product Card Component ---
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <img
        src={product.image || `https://via.placeholder.com/300x200?text=${product.name}`}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800">
            ${product.price.toLocaleString()}
          </span>
          <button
            onClick={() => onAddToCart?.(product)}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const MensClothing: React.FC<MensClothingProps> = ({ selectedCategory }) => {
  const subcategories = ["Shirts", "Pants", "Jackets", "T-Shirts"];

  const products: Product[] = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: `High quality ${selectedCategory.toLowerCase()} item`,
    price: 99.99 + i * 10,
  }));

  const handleSubcategoryClick = (subcategory: string) => {
    console.log("Selected Subcategory:", subcategory);
    // TODO: Filter products based on subcategory
  };

  const handleAddToCart = (product: Product) => {
    console.log("Added to Cart:", product);
    // TODO: Integrate with cart context or API
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">{selectedCategory}</h1>
        <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
      </div>

      {/* Subcategories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {subcategories.map((sub) => (
          <SubcategoryCard
            key={sub}
            name={sub}
            onClick={() => handleSubcategoryClick(sub)}
          />
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MensClothing;
