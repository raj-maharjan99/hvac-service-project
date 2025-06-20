"use client";
import { useRef, useState, useEffect, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { serviceOptions } from "@/lib/data";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("QvXSnqbdw1De-Sjam");
    console.log("EmailJS initialized successfully");
  }, []);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error("Form reference is null");
      return;
    }

    setStatus("sending");

    try {
      const result = await emailjs.sendForm(
        "service_ls8o31s",
        "template_k6jrfdr",
        formRef.current,
        {
          publicKey: "QvXSnqbdw1De-Sjam",
        }
      );

      console.log("Email sent successfully:", result.status, result.text);
      setStatus("success");
      formRef.current.reset();

      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error: any) {
      console.error("EmailJS error:", error);
      setStatus("error");

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Quick Service Request
      </h3>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
        />

        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
        />

        <select
          name="service_type"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
        >
          {serviceOptions.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          placeholder="Additional details (optional)"
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 rounded-lg transition-colors font-medium"
        >
          {status === "sending" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Request Service"
          )}
        </button>
      </form>

      {status === "success" && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-center text-green-700 font-medium">
            ✅ Your request has been sent successfully!
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-center text-red-700 font-medium">
            ❌ Failed to send request. Please try again.
          </p>
        </div>
      )}
    </div>
  );
}
