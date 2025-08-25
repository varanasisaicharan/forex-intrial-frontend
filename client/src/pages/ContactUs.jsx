import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-teal-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help you with all your forex card needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">support@xxxxxx.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">xxxx xxxx</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">xxxx xxxx xxxx xxxx</p>
                </div>
              </div>
              
       
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}