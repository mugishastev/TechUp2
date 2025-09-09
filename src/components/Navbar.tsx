import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { IoMdClose } from "react-icons/io";
import { IoBookmarksOutline } from "react-icons/io5";
import { HiSquare2Stack } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { FaChevronDown, FaDollarSign } from "react-icons/fa";

interface NavbarPageProps {
  logoSrc?: string;
  logoAlt?: string;
}

interface NavLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const NavbarPage: React.FC<NavbarPageProps> = ({
  logoSrc = "logo.png",
  logoAlt = "logo",
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [languageDropdown, setLanguageDropdown] = useState<boolean>(false);
  const [currencyDropdown, setCurrencyDropdown] = useState<boolean>(false);

  const handleNavClick = (item: string) => {
    console.log(`${item} clicked`);
  };

  const navLinks: NavLink[] = [
    { name: "BLOG", icon: IoBookmarksOutline, path: "/Blogs" },
    { name: "FAQ", icon: HiSquare2Stack, path: "/FAQ" },
    { name: "CONTACT US", icon: CiMail, path: "/Contact" },
  ];

  return (
    <>
      {/* Login Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Welcome Back</h2>
              <IoMdClose
                onClick={() => setModalOpen(false)}
                className="cursor-pointer text-gray-500 hover:text-gray-700 text-xl transition-colors"
              />
            </div>
            <LoginForm onClose={() => setModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Top Navbar */}
      <nav className="bg-yellow-400 h-12">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">

            {/* Left Side: Language & Currency */}
            <div className="flex items-center space-x-6">
              {/* Language */}
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdown(!languageDropdown)}
                  className="flex items-center space-x-1 text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  <span>ENGLISH</span>
                  <FaChevronDown
                    className={`text-xs transition-transform ${languageDropdown ? "rotate-180" : ""}`}
                  />
                </button>
                {languageDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded shadow-lg border z-30">
                    {["ENGLISH", "ESPAÑOL", "FRANÇAIS"].map((lang) => (
                      <button
                        key={lang}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Currency */}
              <div className="relative">
                <button
                  onClick={() => setCurrencyDropdown(!currencyDropdown)}
                  className="flex items-center space-x-1 text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  <FaDollarSign className="text-xs" />
                  <span>DOLLAR (US)</span>
                  <FaChevronDown
                    className={`text-xs transition-transform ${currencyDropdown ? "rotate-180" : ""}`}
                  />
                </button>
                {currencyDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-36 bg-white rounded shadow-lg border z-30">
                    {["$ DOLLAR (US)", "€ EURO", "£ POUND"].map((cur) => (
                      <button
                        key={cur}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        {cur}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Links & Login */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-800 text-sm font-medium uppercase tracking-wide">
                WELCOME TO OUR STORE!
              </span>

              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleNavClick(link.name)}
                    className="flex items-center space-x-1 text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide"
                  >
                    <Icon className="text-sm" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              <button
                onClick={() => setModalOpen(true)}
                className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
