const cardOptions = [
  {
    name: "Travel",
    gradient: "from-green-400 to-teal-400",
    cardNumber: "XXXX XXXX XXXX XXXX",
    holderName: "XXXX XXXX ",
    brand: "CARD NAME",
    description: "Perfect for leisure travelers with basic international transaction needs and competitive rates.",
    features: [
      "Only Your Current to USD, EUR, GBP",
      "Only Valid in Your Country",
      "Unlimited Transactions"
    ]
  },
  {
    name: "Business",
    gradient: "from-purple-400 to-pink-400",
    cardNumber: "XXXX XXXX XXXX XXXX", 
    holderName: "XXXX XXXX ",
    brand: "CARD NAME",
    description: "Designed for business travelers with enhanced limits, priority support, and global acceptance.",
    features: [
      "Your Current to USD, EUR, CNY",
      "Valid in 50+ Countries",
      "Unlimited Transactions"
    ],
    isPopular: true
  },
  {
    name: "Premium",
    gradient: "from-gray-800 to-black",
    cardNumber: "XXXX XXXX XXXX XXXX",
    holderName: "XXXX XXXX ",
    brand: "CARD NAME",
    description: "Premium card for frequent travelers with exclusive benefits, concierge service, and VIP treatment.",
    features: [
      "Accept All Currency",
      "Valid in 150+ Countries", 
      "Unlimited Transactions"
    ]
  }
];

export default function CardOptionsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Forex Card <span className="text-teal-600">Options</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our range of forex cards designed to meet different travel and business needs. 
            Each card comes with unique benefits and features tailored for your requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cardOptions.map((option, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 text-center relative ${
                option.isPopular 
                  ? 'bg-teal-600 text-white transform scale-105' 
                  : 'bg-gray-50'
              }`}
              data-testid={`card-option-${option.name.toLowerCase()}`}
            >
              {option.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`mb-6 ${option.isPopular ? 'mt-4' : ''}`}>
                <div className={`w-64 h-40 bg-gradient-to-br ${option.gradient} rounded-2xl shadow-lg mx-auto relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                  <div className="p-4 h-full flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></div>
                      <div className="text-xl font-bold opacity-80">{option.brand}</div>
                    </div>
                    <div>
                      <p className="text-lg font-mono mb-2">{option.cardNumber}</p>
                      <p className="text-sm">{option.holderName}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${option.isPopular ? 'text-white' : 'text-gray-900'}`}>
                {option.name}
              </h3>
              
              <p className={`mb-6 ${option.isPopular ? 'text-teal-100' : 'text-gray-600'}`}>
                {option.description}
              </p>
              
              <ul className={`text-left text-sm space-y-2 ${option.isPopular ? 'text-teal-100' : 'text-gray-600'}`}>
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}