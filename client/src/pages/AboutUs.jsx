import { CheckCircle } from "lucide-react";

const benefits = [
  "RBI approved and regulated",
  "Zero markup on currency conversion",
  "Global acceptance worldwide",
  "Real-time transaction notifications"
];

export  function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">forexX</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading provider of forex solutions, dedicated to making international transactions
            seamless and cost-effective for travelers and businesses alike.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-teal-600">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is to simplify international payments and provide travelers with the most
              convenient and secure way to manage their foreign currency needs.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe everyone should have access to fair exchange rates and transparent fees
              when traveling or conducting business internationally.
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
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-teal-600 mb-2">Transparency</h4>
                <p className="text-gray-600">No hidden fees or charges. We believe in complete transparency in all our transactions.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-teal-600 mb-2">Security</h4>
                <p className="text-gray-600">Your financial security is our top priority with advanced encryption and fraud protection.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-teal-600 mb-2">Innovation</h4>
                <p className="text-gray-600">Continuously improving our services to provide the best experience for our customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}