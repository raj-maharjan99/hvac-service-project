import { Phone, Star } from "lucide-react";
import { serviceOptions } from "@/lib/data";
import Form from "@/components/form";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Sustainable Comfort,
                <span className="text-green-600 block">Reliable HVAC</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Houston's trusted HVAC experts delivering energy-efficient
                heating and cooling solutions. Experience comfort with a
                conscience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-md transition">
                  Get Free Quote
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-md transition flex items-center justify-center">
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
                  <span className="ml-2 text-gray-600">5.0 Rating</span>
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">500+</span> Happy Customers
                </div>
              </div>
            </div>
            <div className="relative">
              {/* form */}
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* <Features />

      <Services /> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Reliable HVAC Service?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't let HVAC issues disrupt your comfort. Contact Houston's
            trusted experts today for fast, professional service you can count
            on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-md transition">
              Get Free Estimate
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4 rounded-md transition flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call 281-777-1295
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
