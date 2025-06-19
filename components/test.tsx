"use client";
import { navTitle } from "@/lib/data";
import { Phone, Wind } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-md shadow-md w-full">
      {/* Navigation */}

      <nav className="bg-white shadow-sm border-b w-full flex justify-between items-center px-2 ">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wind className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">
                <Link href={"/"}>EcoAir Solutions</Link>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navTitle.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="text-gray-700 hover:text-green-600 transition"
                >
                  {item.name}
                </Link>
              ))}

              <button className="bg-blue-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+12817771295" className="text-white">
                  Call Now
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-300"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon */}
            {!isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              // Close icon
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white bg-opacity-20 backdrop-blur-md px-2 pt-2 pb-3 space-y-1"
          id="mobile-menu"
        >
          <div className=" md:flex space-x-8">
            {navTitle.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setIsOpen(false)}
              >
                <li className=" hover:font-bold list-none">{item.name}</li>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
