import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is a Forex Card and how does it work?",
    answer: "A Forex card is a prepaid travel card that allows you to load multiple foreign currencies. You can use it like a debit card for purchases, ATM withdrawals, and online transactions abroad. It works on secure chip and PIN technology."
  },
  {
    question: "How do I apply for a Forex Card?",
    answer: "Simply register on our website, fill out the application form with required documents (passport, visa, address proof), and submit. Your card will be processed and delivered within 24-48 hours after approval."
  },
  {
    question: "What are the charges for using a Forex Card?",
    answer: "We offer competitive rates with zero markup on currency conversion. There are minimal charges for ATM withdrawals abroad and no charges for online transactions. All fees are transparently displayed during application."
  },
  {
    question: "Can I reload my Forex Card while traveling?",
    answer: "Yes, you can easily reload your card online through our website or mobile app. Funds are typically available within a few hours. You can also call our customer support for assistance."
  },
  {
    question: "Is my money safe with a Forex Card?",
    answer: "Absolutely! Our cards use advanced chip and PIN security, real-time fraud monitoring, and are backed by RBI regulations. If your card is lost or stolen, you can instantly block it and get a replacement."
  },
  {
    question: "Which currencies can I load on my Forex Card?",
    answer: "You can load major currencies including USD, EUR, GBP, AUD, CAD, JPY, SGD, and many more. Our multi-currency card supports over 15 popular currencies for your travel needs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-teal-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our forex card services and application process.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden"
              data-testid={`faq-${index}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-teal-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-teal-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}