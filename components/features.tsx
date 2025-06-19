import { features } from "@/lib/data";

export default function Features() {
  return (
    <section className="bg-green-600 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-sm lg:text-base">
                {feature.title}
              </h4>
              <p className="text-xs lg:text-sm text-green-100 mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
