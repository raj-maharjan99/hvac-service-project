import { CheckCircle, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Houston's Trusted HVAC Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              EcoAir Solutions is Houston's premier HVAC company, committed to
              delivering energy-efficient and eco-friendly heating and cooling
              services. We focus on providing comfort with a conscience,
              ensuring your home stays comfortable while minimizing
              environmental impact.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-gray-700">
                  Licensed & Insured HVAC Professionals
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-gray-700">
                  Energy-Efficient Solutions Specialist
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-gray-700">
                  24/7 Emergency Service Available
                </span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Meet Our CEO</h4>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Raj Maharjan</strong> - Industry Expert & Founder
                </p>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-green-600" />
                  <span>281-777-1295</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-green-600" />
                  <span>rjuallone@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
