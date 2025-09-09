import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <ChevronRight
          className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
        />
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    { question: "What are the delivery charges?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium nisl feugiat nisl gravida, eget lacinia lacus placerat." },
    { question: "How do I return something to you?", answer: "To return an item, please follow our return process outlined on the Returns page." },
    { question: "What is your International Returns Policy?", answer: "Our international returns policy allows for returns within 30 days of delivery." },
    { question: "My refund is incorrect, what should I do?", answer: "If your refund is incorrect, please contact customer service for assistance." },
    { question: "Will my parcel be charged customs and import charges?", answer: "Yes, international orders may be subject to customs and import charges." },
    { question: "Do you refund delivery charges if I return something?", answer: "We do not refund delivery charges for returns unless the item is faulty." },
    { question: "What is the estimated delivery time?", answer: "The estimated delivery time is 3-5 business days." },
    { question: "How does order tracking work?", answer: "You can track your order using the tracking link provided in your confirmation email." },
  ];

  return (
    <>
      {/* Hero */}
      <div
        className="relative min-h-[400px] w-full"
        style={{
          backgroundImage: `url(https://i.pinimg.com/1200x/24/41/60/24416046889c9dc2750404cb642e735e.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white">FAQ</h1>
          <p className="text-lg text-white mt-2">
            <Link to="/home" className="underline">Home</Link> / FAQ
          </p>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="container mx-auto p-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            {faqs.slice(0, 4).map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Returns & Refunds</h2>
            {faqs.slice(4).map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
