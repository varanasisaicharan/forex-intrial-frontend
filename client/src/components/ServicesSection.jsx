import { CreditCard, Globe, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Forex Cards",
    description: "Multi-currency prepaid cards for international travel and online transactions with competitive exchange rates."
  },
  {
    icon: Globe,
    title: "Currency Exchange",
    description: "Get the best exchange rates for over 50+ currencies with transparent pricing and no hidden fees."
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance coverage for medical emergencies, trip cancellations, and lost luggage."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your forex and travel-related queries and assistance."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Services Provided by Our Website
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive forex and travel services designed to make your international 
            transactions seamless and cost-effective.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="text-teal-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}