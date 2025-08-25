import { UserPlus, Edit, CheckCircle } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Login and Register",
    description: "Create your account on our platform with your email and basic details. Verify your identity through our secure registration process."
  },
  {
    number: "02", 
    icon: Edit,
    title: "Submit The Form",
    description: "Complete the application form with your personal and travel details. Upload required documents including passport, visa, and address proof."
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Wait Till Approved", 
    description: "Your application will be processed within 24-48 hours. Once approved, your forex card will be dispatched and delivered to your address."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How to Get The <span className="text-teal-primary">Card</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting your forex card is simple and straightforward. Follow these easy steps 
            to start your seamless international payment experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`step-${step.number}`}>
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-teal-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}.
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300" style={{ width: 'calc(100% - 2rem)', marginLeft: '1rem' }}></div>
                )}
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-teal-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}