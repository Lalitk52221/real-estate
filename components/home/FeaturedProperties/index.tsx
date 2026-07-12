import Container from "@/components/layout/Container";
import PropertyCard from "./PropertyCard";
import { properties } from "./properties";

export default function FeaturedProperties() {
  return (
    <section className="bg-[#081625] py-24">

      <Container>

        <div className="mb-14 flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-bold text-white">
              Featured Properties
            </h2>

            <p className="mt-2 text-slate-400">
              Handpicked properties just for you.
            </p>

          </div>

          <button className="text-sm font-semibold text-white hover:text-blue-400">
            View All
          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-4 xl:grid-cols-4">

          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}