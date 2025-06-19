// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col">
//       <main className="flex-grow container mx-auto px-6 py-16 max-w-md">
//         <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
//         <p className="mb-6">
//           Have questions or want to schedule service? Reach out to EcoAir
//           Solutions!
//         </p>
//         <div>
//           <p>
//             <strong>Phone:</strong>{" "}
//             <a
//               href="tel:+12817771295"
//               className="text-blue-600 hover:underline"
//             >
//               281-777-1295
//             </a>
//           </p>
//           <p>
//             <strong>Email:</strong>{" "}
//             <a
//               href="mailto:rjuallone@gmail.com"
//               className="text-blue-600 hover:underline"
//             >
//               rjuallone@gmail.com
//             </a>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to schedule service? Reach out to EcoAir
            Solutions! We're here to help with all your HVAC needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
                <h2 className="text-2xl font-bold">Get In Touch</h2>
                <p className="text-blue-100 mt-2">
                  We're ready to help you with professional HVAC services
                </p>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+12817771295"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium"
                    >
                      (281) 777-1295
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:rjuallone@gmail.com"
                      className="text-green-600 hover:text-green-800 transition-colors text-lg font-medium"
                    >
                      rjuallone@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Emergency service available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Service Area
                    </h3>
                    <p className="text-gray-600">Greater Houston Area</p>
                    <p className="text-gray-600">Licensed & Insured</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose EcoAir Solutions?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Licensed & Insured Professionals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 Emergency Service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Eco-Friendly Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Competitive Pricing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mt-2">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>
            <div className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Service Needed
                  </label>
                  <input
                    id="service"
                    type="text"
                    placeholder="AC Repair, Installation, Maintenance, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your HVAC needs or any questions you have..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl mx-auto p-12">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Service?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait! Call us now for emergency HVAC repairs and same-day
              service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12817771295"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (281) 777-1295
              </a>
              <a
                href="mailto:rjuallone@gmail.com"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-md transition-all duration-200 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
