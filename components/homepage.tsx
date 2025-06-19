import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Users,
  Wrench,
  Snowflake,
  Wind,
  Gauge,
  CheckCircle,
  Award,
  ThermometerSun,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <ThermometerSun className="h-8 w-8 text-black" />,
      title: "HVAC Installation",
      description:
        "Professional installation of energy-efficient heating and cooling systems",
    },
    {
      icon: <Wrench className="h-8 w-8 text-black" />,
      title: "AC & Heater Repair",
      description:
        "Fast, reliable repair services to get your system running smoothly",
    },
    {
      icon: <Shield className="h-8 w-8 text-black" />,
      title: "Preventive Maintenance",
      description:
        "Regular maintenance to extend your system's life and efficiency",
    },
    {
      icon: <Wind className="h-8 w-8 text-black" />,
      title: "Indoor Air Quality",
      description:
        "Improve your home's air quality with advanced filtration systems",
    },
    {
      icon: <Gauge className="h-8 w-8 text-black" />,
      title: "Energy-Efficient Upgrades",
      description:
        "Upgrade to eco-friendly systems that save money and the environment",
    },
    {
      icon: <Snowflake className="h-8 w-8 text-black" />,
      title: "Thermostat Installation",
      description:
        "Smart thermostat installation for optimal comfort and savings",
    },
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-black" />,
      title: "24/7 Emergency Service",
      description: "Available when you need us most",
    },
    {
      icon: <Award className="h-6 w-6 text-black" />,
      title: "Licensed & Insured",
      description: "Fully certified HVAC professionals",
    },
    {
      icon: <Users className="h-6 w-6 text-black" />,
      title: "Experienced Team",
      description: "Years of expertise in Houston climate",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-black" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction on all services",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Sustainable Comfort,
                <span className="block text-black">Reliable HVAC</span>
              </h1>
              <p className="text-xl text-black mb-8 leading-relaxed">
                Houston's trusted HVAC experts delivering energy-efficient
                heating and cooling solutions. Experience comfort with a
                conscience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white border border-black hover:bg-gray-100 text-black text-lg px-8 py-4 rounded-md transition">
                  Get Free Quote
                </button>
                <button className="border border-black text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-md transition flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  281-777-1295
                </button>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-black">5.0 Rating</span>
                </div>
                <div className="text-black">
                  <span className="font-semibold">500+</span> Happy Customers
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Quick Service Request
                  </h3>
                  <p className="text-black">
                    Get your HVAC issue resolved today
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                    <option>Select Service</option>
                    <option>AC Repair</option>
                    <option>Heater Repair</option>
                    <option>Installation</option>
                    <option>Maintenance</option>
                  </select>
                  <button className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg transition">
                    Request Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-8 border-t border-gray-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-black">
                <div className="flex justify-center mb-2">{feature.icon}</div>
                <h4 className="font-semibold text-sm lg:text-base">
                  {feature.title}
                </h4>
                <p className="text-xs lg:text-sm text-gray-700 mt-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our Expert Services
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              From installation to maintenance, we provide comprehensive HVAC
              solutions tailored to Houston's unique climate needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
              >
                <div className="p-8">
                  <div className="text-black mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-black font-semibold mt-4 hover:text-gray-900 transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Houston's Trusted HVAC Experts
              </h2>
              <p className="text-lg text-black mb-6 leading-relaxed">
                EcoAir Solutions is Houston's premier HVAC company, committed to
                delivering energy-efficient and eco-friendly heating and cooling
                services. We focus on providing comfort with a conscience,
                ensuring your home stays comfortable while minimizing
                environmental impact.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-black mr-3" />
                  <span className="text-black">
                    Licensed & Insured HVAC Professionals
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-black mr-3" />
                  <span className="text-black">
                    Energy-Efficient Solutions Specialist
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-black mr-3" />
                  <span className="text-black">
                    24/7 Emergency Service Available
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-black mb-3">Meet Our CEO</h4>
                <div className="space-y-2 text-black">
                  <p>
                    <strong>Raj Maharjan</strong> - Industry Expert & Founder
                  </p>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-black" />
                    <span>281-777-1295</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-black" />
                    <span>rjuallone@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-black mb-2">
                      500+
                    </div>
                    <div className="text-black">Happy Customers</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-black mb-2">
                      10+
                    </div>
                    <div className="text-black">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-black mb-2">
                      24/7
                    </div>
                    <div className="text-black">Emergency Service</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-black mb-2">
                      100%
                    </div>
                    <div className="text-black">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 border-t border-gray-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready for Reliable HVAC Service?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Don't let HVAC issues disrupt your comfort. Contact Houston's
            trusted experts today for fast, professional service you can count
            on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white border border-black text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-md transition">
              Get Free Estimate
            </button>
            <button className="border border-black text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-md transition flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call 281-777-1295
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
