import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import ProductCarouselDemo from "./HotDealsCarousel";
import BestSellingProducts from "./bestSellingProducts";
import Freeshipping from "./Freeshipping";
import Shop from "./Shop";
import Blogs from "./Blogs";
import Elements from "./Elements";
import heroImg1 from "../assets/electronics-slider-1.png";
import heroImg2 from "../assets/electronics-slider-2.png";
import image1 from '../assets/image.png';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

// ------------------- Types -------------------
interface Category {
  name: string;
  subcategories?: string[];
}

interface NavigationItem {
  name: string;
  id: string;
}

interface ProductCard {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  image: string;
  textColor: string;
  price?: number;
  originalPrice?: number;
}

interface HeroSlide {
  title: string;
  subtitle: string;
  img: string;
  discount: string;
  buttonText: string;
}

// ------------------- Data -------------------
const heroSlides: HeroSlide[] = [
  { title: "WIRELESS CHARGING STAND", subtitle: "BEST SMARTPHONE", img: heroImg1, discount: "Up To 70% Off", buttonText: "BUY NOW" },
  { title: "HEADPHONES", subtitle: "PREMIUM AUDIO", img: heroImg2, discount: "Min. 40-80% Off", buttonText: "SHOP NOW" },
  
];

const featuredProducts: ProductCard[] = [
  { id: 1, title: "WIRELESS SPEAKER", subtitle: "DIGITAL SMART", discount: "MIN. 30-75% OFF", image: image1, textColor: "text-gray-800", price: 49.99, originalPrice: 79.99 },
  { id: 2, title: "WATCH CHARGER", subtitle: "DIGITAL SMART", discount: "UP TO 75% OFF", image: image2, textColor: "text-gray-800", price: 29.99, originalPrice: 59.99 },
  { id: 3, title: "SMARTPHONE", subtitle: "LATEST MODEL", discount: "UP TO 60% OFF", image: image3, textColor: "text-white", price: 599, originalPrice: 699 },
  { id: 4, title: "HEADPHONES", subtitle: "PREMIUM AUDIO", discount: "MIN. 40-80% OFF", image: image4, textColor: "text-white", price: 199, originalPrice: 249 }
];

const categories: Category[] = [
  { name: "Men's Clothing", subcategories: ["Shirts", "Pants", "Jackets", "T-Shirts"] },
  { name: "Women's Clothing", subcategories: ["Dresses", "Tops", "Skirts", "Jackets"] },
  { name: "Accessories", subcategories: ["Belts", "Hats", "Sunglasses", "Scarves"] },
  { name: "Shoes", subcategories: ["Sneakers", "Boots", "Sandals", "Formal"] },
  { name: "Jewellery", subcategories: ["Necklaces", "Rings", "Bracelets", "Earrings"] },
  { name: "Bags & Backpacks", subcategories: ["Handbags", "Backpacks", "Wallets", "Travel Bags"] },
  { name: "Watches", subcategories: ["Smart Watches", "Analog", "Digital", "Luxury"] },
  { name: "Dresses", subcategories: ["Casual", "Formal", "Party", "Summer"] }
];

const navigationItems: NavigationItem[] = [
  { name: "HOME", id: "home" },
  { name: "SHOP", id: "shop" },
  { name: "BLOG", id: "blog" },
  { name: "ELEMENTS", id: "elements" },
  { name: "BUY NOW", id: "buy-now" }
];

// ------------------- Hero Section -------------------
const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-50 flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24">
      <div className="flex-1 mb-8 md:mb-0">
        <p className="text-yellow-400 font-semibold text-2xl md:text-3xl">{heroSlides[currentSlide].subtitle}</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">{heroSlides[currentSlide].title}</h1>
        <p className="text-lg md:text-3xl mt-2">{heroSlides[currentSlide].discount}</p>
        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all">
          {heroSlides[currentSlide].buttonText}
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={heroSlides[currentSlide].img} alt={heroSlides[currentSlide].title} className="w-full max-w-md md:max-w-lg object-contain"/>
      </div>

      {/* Navigation Arrows */}
      <button onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-yellow-400">
        <ChevronLeft size={36}/>
      </button>
      <button onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-yellow-400">
        <ChevronRight size={36}/>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-yellow-400' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

// ------------------- Tabbed Products -------------------
const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Featured' | 'Recent' | 'On Sale' | 'Top Rated'>('Featured');

  const tabs: { [key: string]: ProductCard[] } = {
    'Featured': featuredProducts,
    'Recent': featuredProducts, // replace with recentProducts
    'On Sale': featuredProducts, // replace with onSaleProducts
    'Top Rated': featuredProducts // replace with topRatedProducts
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex space-x-4 mb-6 justify-center">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold rounded-lg transition-all ${activeTab === tab ? 'bg-yellow-400 text-gray-800' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tabs[activeTab].map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
            <div className="p-4 flex flex-col justify-between h-80">
              <div className={product.textColor}>
                <p className="text-sm text-yellow-500">{product.subtitle}</p>
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">{product.discount}</p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img src={product.image} alt={product.title} className="max-h-32 object-contain"/>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold text-gray-800">${product.price}</span>
                {product.originalPrice && <span className="text-sm line-through text-gray-500">${product.originalPrice}</span>}
              </div>
              <button className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 rounded-lg transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ------------------- Main Store -------------------
const KapeeStore: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('home');

  const renderMainContent = () => {
    switch (activeNavItem) {
      case 'home': return (<><HeroSection /><ProductTabs /></>);
      case 'shop': return <Shop />;
      case 'blog': return <Blogs />;
      case 'elements': return <Elements />;
      default: return <div className="p-8 text-center">Content Coming Soon</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-3xl font-bold text-gray-800">kapee.</div>
          <nav className="flex space-x-6">
            {navigationItems.map(item => (
              <button key={item.id} className={`font-semibold ${activeNavItem === item.id ? 'text-yellow-600' : 'text-gray-600 hover:text-gray-800'}`} 
                onClick={() => setActiveNavItem(item.id)}>
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {renderMainContent()}
        <BestSellingProducts />
        <Freeshipping />
      </main>
    </div>
  );
};

export default KapeeStore;
