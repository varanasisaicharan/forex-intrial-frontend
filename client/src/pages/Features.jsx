import { CheckCircle, Zap, Lock, Clock, Globe, Bell } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Get your forex card activated instantly and start using it immediately."
  },
  {
    icon: Lock,
    title: "Advanced Security",
    description: "Chip and PIN technology with 24/7 fraud monitoring and instant blocking."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your queries and issues."
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    description: "Accepted at millions of locations worldwide including ATMs, shops, and restaurants."
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Instant SMS and email notifications for all transactions and balance updates."
  },
  {
    icon: CheckCircle,
    title: "Zero Liability",
    description: "Complete protection against unauthorized transactions and lost card liability."
  }
];

export  function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Key <span className="text-teal-600">Features</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make our forex cards the preferred choice for
            international travelers and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}