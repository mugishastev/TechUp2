import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Search } from 'lucide-react';
import image1 from '../assets/image.png';
import image2 from '../assets/image2.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  featured?: boolean;
  badge?: string;
  bgColor?: string;
  badgeColor?: string;
}

interface CarouselProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

const hotDealsProducts: Product[] = [
  { id: 1, name: "Microsoft Xbox One Controller", category: "ELECTRONICS", price: 25, originalPrice: 45, discount: "44% OFF", image: image1, badge: "44% OFF" },
  { id: 2, name: "Sony PlayStation 5 Controller", category: "ELECTRONICS", price: 55, originalPrice: 70, discount: "21% OFF", image: image1, badge: "21% OFF" },
  { id: 3, name: "Nintendo Switch Pro Controller", category: "ELECTRONICS", price: 45, originalPrice: 70, discount: "36% OFF", image: image1, badge: "36% OFF" }
];

const featuredProductsData: Product[] = [
  { id: 1, name: "Apple iPhone 11 Pro Max", category: "ELECTRONICS", price: 199, originalPrice: 254, discount: "22% OFF", image: image1, badge: "22% OFF" },
  { id: 2, name: "Apple Watch Series 5", category: "ELECTRONICS", price: 499, originalPrice: 599, discount: "17% OFF", image: image4, badge: "17% OFF" },
  { id: 3, name: "JBL Wireless Bluetooth Speaker", category: "ELECTRONICS", price: 96, image: image5, featured: true, badge: "FEATURED" },
  { id: 4, name: "JBL On-Ear Headphones", category: "ELECTRONICS", price: 124, image: image6, featured: true, badge: "FEATURED" },
  { id: 5, name: "Apple AirPods with Wireless Charging Case", category: "ELECTRONICS", price: 85, image: image2, featured: true, badge: "FEATURED" },
  { id: 6, name: "Samsung Galaxy S20 8GB RAM", category: "ELECTRONICS", price: 250, image: image4, badge: "NEW" },
  { id: 7, name: "Samsung Gear 360 Camera", category: "ELECTRONICS", price: 29, originalPrice: 48, discount: "40% OFF", image: image5, badge: "40% OFF" },
  { id: 8, name: "Apple Watch Series 5 Black", category: "ELECTRONICS", price: 599, image: image6, badge: "PREMIUM" }
];

const HotDealsCarousel: React.FC<CarouselProps> = ({ products, onProductClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextProduct = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevProduct = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  const product = products[currentIndex];

  return (
    <div className="bg-white border-2 border-yellow-400 rounded-2xl p-6 shadow-lg relative">
      <h3 className="text-xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-1 mb-4">HOT DEALS</h3>
      <div className="relative">
        <button onClick={prevProduct} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextProduct} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md">
          <ChevronRight size={20} />
        </button>

        <div className="text-center mt-8 relative">
          {product.badge && (
            <div className={`absolute top-2 left-2 px-2 py-1 text-xs rounded ${product.badgeColor ? product.badgeColor : 'bg-green-500 text-white'}`}>
              {product.badge}
            </div>
          )}
          <img src={product.image} alt={product.name} className="mx-auto w-full h-32 object-contain rounded-lg mb-2" />
          <p className="text-xs text-gray-500">{product.category}</p>
          <h4 className="font-semibold text-gray-800">{product.name}</h4>
          <div className="flex justify-center space-x-2">
            <span className="font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && <span className="text-sm line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>}
          </div>
          <div className="flex justify-center space-x-2 mt-2">
            <button className="flex items-center space-x-1 bg-yellow-400 px-2 py-1 rounded" onClick={() => onProductClick?.(product)}>
              <ShoppingCart size={16} /> <span>ADD TO CART</span>
            </button>
            <button className="p-1 bg-gray-200 rounded"><Search size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProductsCarousel: React.FC<CarouselProps> = ({ products, onProductClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 4;
  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  const next = () => setCurrentIndex((prev) => (prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? Math.max(0, products.length - itemsPerPage) : prev - itemsPerPage));

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">FEATURED PRODUCTS</h2>
        <div className="flex space-x-2">
          <button onClick={prev} className="p-2 border rounded"><ChevronLeft size={20} /></button>
          <button onClick={next} className="p-2 border rounded"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleProducts.map((p) => (
          <div key={p.id} className="border rounded-lg p-2 relative" onClick={() => onProductClick?.(p)}>
            {p.badge && <div className="absolute bg-gray-500 text-white px-1 text-xs rounded">{p.badge}</div>}
            <img src={p.image} alt={p.name} className="w-full h-32 object-cover mb-2" />
            <p className="text-xs text-gray-500">{p.category}</p>
            <h3 className="font-semibold text-gray-800">{p.name}</h3>
            <div className="flex space-x-2">
              <span className="font-bold">${p.price.toFixed(2)}</span>
              {p.originalPrice && <span className="text-sm line-through text-gray-500">${p.originalPrice.toFixed(2)}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCarouselDemo: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <HotDealsCarousel products={hotDealsProducts} onProductClick={setSelectedProduct} />
        </div>
        <div className="lg:col-span-3">
          <FeaturedProductsCarousel products={featuredProductsData} onProductClick={setSelectedProduct} />
        </div>
      </div>

      {selectedProduct && (
        <div className="mt-4 p-4 border bg-yellow-50 rounded">
          Selected Product: {selectedProduct.name} - ${selectedProduct.price.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default ProductCarouselDemo;
