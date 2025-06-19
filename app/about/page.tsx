export default function About() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About EcoAir Solutions</h1>
        <p className="mb-6">
          EcoAir Solutions was founded by <strong>Raj Maharjan</strong> with the
          mission to provide sustainable and reliable HVAC services. Our team is
          dedicated to improving your comfort while minimizing environmental
          impact.
        </p>
        <div>
          <h2 className="text-2xl font-semibold mb-2">CEO Details</h2>
          <p>
            <strong>Name:</strong> Raj Maharjan
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+12817771295"
              className="text-blue-600 hover:underline"
            >
              +1-281-777-1295
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
