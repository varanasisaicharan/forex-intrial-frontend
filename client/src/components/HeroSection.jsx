import { useState, useEffect } from "react";
import { CreditCard, Shield, Globe, CheckCircle } from "lucide-react";

const slides = [
  {
    title: "Premium Forex Cards",
    subtitle: "International Payments Made Easy",
    description: "Get the best exchange rates with zero markup fees for all your international transactions.",
    features: [
      "Zero markup on exchange rates",
      "Load multiple currencies",
      "Instant reload facility"
    ]
  },
  {
    title: "Global Acceptance",
    subtitle: "Use Anywhere, Anytime",
    description: "Accepted at millions of locations worldwide. Shop, dine, and travel with confidence.",
    features: [
      "Accepted worldwide",
      "Works at ATMs globally",
      "Contactless payment enabled"
    ]
  },
  {
    title: "Secure Transactions",
    subtitle: "Bank-Level Security",
    description: "Advanced encryption and fraud protection to keep your money safe wherever you go.",
    features: [
      "24/7 fraud monitoring",
      "Instant card blocking",
      "Zero liability protection"
    ]
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side - Carousel with clean content */}
          <div className="mb-12 lg:mb-0">
            <div className="transition-all duration-500">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {slide.title}
                <br />
                <span className="text-teal-600">{slide.subtitle}</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {slide.description}
              </p>
              
              {/* Features list */}
              <div className="mb-8 space-y-4">
                {slide.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slide indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Right side - Static Card Image with benefits */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="w-full h-56 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500 rounded-2xl shadow-2xl relative overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                <div className="p-6 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></div>
                    <div className="text-2xl font-bold opacity-80">CARD NAME </div>
                  </div>
                  <div>
                    <p className="text-lg font-mono tracking-wider mb-2">CARD NO XXXX XXXX XXXX</p>
                    <div className="flex justify-between text-sm">
                      <span>USER NAME </span>
                      <span>VALIDITY DATE </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card benefits */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Card Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Insurance Coverage</div>
                      <div className="text-sm text-gray-600">Comprehensive travel insurance</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">No Foreign Fees</div>
                      <div className="text-sm text-gray-600">Zero transaction fees abroad</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="w-5 h-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Easy Management</div>
                      <div className="text-sm text-gray-600">Mobile app for balance tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}