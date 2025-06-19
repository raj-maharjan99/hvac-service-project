import { serviceOptions, services } from "@/lib/data";
import Link from "next/link";

export default function Form() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Quick Service Request
        </h3>
        <p className="text-gray-600">Get your HVAC issue resolved today</p>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
          {serviceOptions.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition">
          Request Service
        </button>
      </div>
    </div>
  );
}
