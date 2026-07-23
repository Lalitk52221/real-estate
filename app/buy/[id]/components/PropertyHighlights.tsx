import {
  CalendarDays,
  Car,
  Home,
  ShieldCheck,
  Sofa,
  Trees,
} from "lucide-react";

import { Property } from "@/app/buy/data/propertyData";

interface PropertyHighlightsProps {
  property: Property;
}

export default function PropertyHighlights({
  property,
}: PropertyHighlightsProps) {
  const highlights = [
    {
      icon: Home,
      title: "Property Type",
      value: property.propertyType,
    },
    {
      icon: CalendarDays,
      title: "Availability",
      value: "Ready To Move",
    },
    {
      icon: Car,
      title: "Parking",
      value: "2 Covered",
    },
    {
      icon: Sofa,
      title: "Furnishing",
      value: "Semi Furnished",
    },
    {
      icon: Trees,
      title: "Facing",
      value: "North East",
    },
    {
      icon: ShieldCheck,
      title: "Ownership",
      value: "Freehold",
    },
  ];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        Property Highlights
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500 hover:shadow-md"
            >
              <div className="rounded-xl bg-blue-100 p-3">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h4 className="font-semibold text-slate-900">
                  {item.value}
                </h4>
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}