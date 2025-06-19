import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            EcoAir Solutions
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            Professional HVAC Services Focused on Efficiency, Comfort &
            Sustainability
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700 transition"
          >
            Request a Free Estimate
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HVAC Installation",
              "AC & Heating Repair",
              "Duct Cleaning & Replacement",
              "Smart Thermostat Setup",
              "Seasonal Maintenance",
              "Energy-Saving Upgrades",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 border rounded-lg shadow hover:shadow-lg transition text-left"
              >
                <h3 className="font-semibold text-xl mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  High-quality, reliable, and eco-conscious solutions to keep
                  your home or business comfortable.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="text-green-600 underline hover:text-green-800"
            >
              View Full Service List &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 border-t">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose EcoAir?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Eco-Friendly Approach",
                desc: "We use energy-efficient systems and green practices that reduce your carbon footprint.",
              },
              {
                title: "Fast & Reliable Service",
                desc: "Our technicians arrive on time and complete jobs with precision and care.",
              },
              {
                title: "Experienced Team",
                desc: "Backed by years of hands-on HVAC experience and technical expertise.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees. Just honest, upfront pricing you can trust.",
              },
              {
                title: "Locally Owned",
                desc: "Proudly serving Houston and surrounding areas with personalized service.",
              },
              {
                title: "Emergency Support",
                desc: "We’re available when you need us most — day or night.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white border-t py-14 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Comfort & Savings?
          </h2>
          <p className="mb-6 text-gray-700">
            Contact EcoAir Solutions today for top-tier HVAC service you can
            trust.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} EcoAir Solutions. All rights reserved.
      </footer>
    </div>
  );
}
