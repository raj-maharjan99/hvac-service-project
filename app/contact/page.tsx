export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-16 max-w-md">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6">
          Have questions or want to schedule service? Reach out to EcoAir
          Solutions!
        </p>
        <div>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+12817771295"
              className="text-blue-600 hover:underline"
            >
              281-777-1295
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:rjuallone@gmail.com"
              className="text-blue-600 hover:underline"
            >
              rjuallone@gmail.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
