import { Mail, MapPin, Phone, Star, Wind } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wind className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">EcoAir Solutions</span>
              </div>
              <p className="text-gray-400 mb-4">
                Houston's trusted HVAC experts delivering sustainable comfort
                solutions.
              </p>
              <div className="flex space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400">5.0 Rating</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition"
                  >
                    HVAC Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition"
                  >
                    AC Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition"
                  >
                    Heater Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition"
                  >
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-white transition">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-green-400" />
                  <span>281-777-1295</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-green-400" />
                  <span>rjuallone@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-green-400" />
                  <span>Houston, TX</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} EcoAir Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
