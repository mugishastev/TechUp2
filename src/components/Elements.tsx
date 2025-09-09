import React from "react";

const Elements: React.FC = () => {
  const elementsList = [
    "Typography",
    "Headings",
    "Buttons",
    "Social Buttons",
    "Progress Bar",
    "Info Box",
    "Instagram",
    "Tabs",
    "Talks",
    "Accordion",
    "Blog Listing",
    "Products Grid Carousel",
    "Products With Banner",
    "Products Categories",
    "Image Gallery",
    "Recently Viewed Products",
    "Testimonials",
    "Counter",
    "Countdown Timer",
    "Hot Deal Products",
    "Products Widgets",
    "Portfolio Listing",
    "Portfolio Carousel",
    "Products Categories Thumbnail",
    "Team",
    "Tours",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-5">Elements</h1>

      <nav>
        <ul className="flex flex-wrap justify-center gap-8 mb-10">
          <li className="text-lg">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Home
            </a>
          </li>
          <li className="text-lg">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Elements
            </a>
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl">
        {elementsList.map((element) => (
          <div
            key={element}
            className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <a
              href="#"
              className="text-lg text-gray-800 hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              {element}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elements;
