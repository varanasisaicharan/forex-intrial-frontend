import { CheckCircle, Shield, Globe, CreditCard } from "lucide-react";

const benefits = [
  "RBI approved and regulated",
  "Zero markup on currency conversion",
  "Global acceptance worldwide",
  "Real-time transaction notifications"
];

const features = [
  {
    icon: Shield,
    title: "Secure & Protected",
    description: "Advanced security measures to keep your transactions safe"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Use your card anywhere around the world with ease"
  },
  {
    icon: CreditCard,
    title: "Easy Management",
    description: "Simple loading and tracking through our mobile app"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What is a <span className="text-teal-600">Forex Card</span> and Why is it Useful?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A Forex card is a prepaid travel card that allows you to load multiple foreign currencies 
              and use them for transactions abroad. It's the most convenient and cost-effective way to 
              manage your international expenses.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Unlike cash or credit cards, forex cards offer better exchange rates, enhanced security, 
              and are widely accepted worldwide. They help you avoid dynamic currency conversion charges 
              and provide better control over your travel budget.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="mr-3 w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="text-teal-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Forex Cards?</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Instant card issuance and activation</li>
                <li>• Competitive exchange rates with live updates</li>
                <li>• Multi-currency loading and management</li>
                <li>• Dedicated customer support and assistance</li>
                <li>• Secure chip and PIN technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}