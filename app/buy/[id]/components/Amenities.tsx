import { CheckCircle2 } from "lucide-react";
import { Property } from "../../data/propertyData";
interface AmenitiesProps {
  property: Property;
  
}

export default function Amenities({
  property,
}: AmenitiesProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Amenities
        </h2>

        <p className="mt-2 text-slate-500">
          Enjoy premium facilities designed for a comfortable lifestyle.
        </p>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {property.amenities.map((amenity) => (
          <div
            key={amenity}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-lg
            "
          >

            <div className="rounded-full bg-blue-100 p-2">

              <CheckCircle2 className="h-6 w-6 text-blue-600" />

            </div>

            <span className="font-medium text-slate-700">
              {amenity}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}