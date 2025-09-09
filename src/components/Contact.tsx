// Contact Component
import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // For input and textarea change
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

// For form submit
const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  setFormData({ name: "", email: "", subject: "", message: "" });
};

  return (
    <section className="text-black">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div
          className="text-center mb-12 relative min-h-[500px] w-full"
          style={{
            backgroundImage: `url(https://i.pinimg.com/1200x/24/41/60/24416046889c9dc2750404cb642e735e.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-white">Contact Me</h1>
            <p className="text-lg text-white">Get in Touch</p>
          </div>
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="text-2xl mb-4">Let's Connect</h3>
            <p className="leading-relaxed mb-8">
              If you have a question or need help, do not hesitate to contact me. I'm here for you! Contact me for more information and support.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-5 rounded-lg border border-opacity-10">
                <Phone size={24} />
                <div>
                  <strong>Name:</strong> baddest
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-5 rounded-lg border border-opacity-10">
                <MapPin size={24} />
                <div>
                  <strong>Address:</strong> Kicukiro, Kigali, Rwanda
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-5 rounded-lg border border-opacity-10">
                <Mail size={24} />
                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:mugishas614@gmail.com"
                    className="text-black hover:underline"
                  >
                    mugishas614@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-5 p-8 rounded-lg border border-opacity-10">
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-opacity-20 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-opacity-20 rounded-lg"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-opacity-20 rounded-lg mb-4"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-opacity-20 rounded-lg mb-4"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-gray-800 flex items-center justify-center"
              >
                <Send size={16} className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
