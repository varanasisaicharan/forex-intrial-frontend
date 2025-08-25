import { CreditCard, Globe, Shield, RefreshCw } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Forex Card Services",
    description: "Multi-currency forex cards with competitive exchange rates and global acceptance.",
    features: ["Multiple currency support", "Instant reload", "Worldwide acceptance"]
  },
  {
    icon: Globe,
    title: "Currency Exchange",
    description: "Get the best exchange rates for over 50 currencies with zero hidden markup.",
    features: ["Live rate updates", "No hidden fees", "Quick processing"]
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance coverage for international travelers.",
    features: ["Medical coverage", "Trip protection", "24/7 assistance"]
  },
  {
    icon: RefreshCw,
    title: "Card Management",
    description: "Easy online management of your forex card through our mobile app and web portal.",
    features: ["Balance tracking", "Transaction history", "Card blocking"]
  }
];

export  function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-teal-600">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive forex solutions designed to meet all your international payment
            and travel currency needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-teal-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}