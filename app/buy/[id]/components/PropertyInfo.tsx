import {
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Building2,
  BadgeIndianRupee,
} from "lucide-react";

import { Property } from "@/app/buy/data/propertyData";

interface PropertyInfoProps {
  property: Property;
}

export default function PropertyInfo({
  property,
}: PropertyInfoProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      {/* Price */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

        <div>

          <p className="mb-2 text-sm font-medium text-blue-600">
            {/* {property.purpose} •  */}
            {property.propertyType}
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            {property.title}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-slate-500">

            <MapPin className="h-5 w-5" />

            <span>
              {property.location}, {property.city}, {property.state}
            </span>

          </div>

        </div>

        <div className="rounded-2xl bg-blue-50 px-6 py-5">

          <div className="flex items-center gap-2">

            <BadgeIndianRupee className="h-6 w-6 text-blue-600" />

            <span className="text-3xl font-bold text-blue-700">
              {property.price}
            </span>

          </div>

          <p className="mt-2 text-sm text-slate-500">
            Price Negotiable
          </p>

        </div>

      </div>

      {/* Overview */}

      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">

        <div className="rounded-2xl border p-5">

          <BedDouble className="mb-3 h-7 w-7 text-blue-600" />

          <p className="text-sm text-slate-500">
            Bedrooms
          </p>

          <h4 className="mt-1 text-xl font-semibold">
            {property.bedrooms}
          </h4>

        </div>

        <div className="rounded-2xl border p-5">

          <Bath className="mb-3 h-7 w-7 text-blue-600" />

          <p className="text-sm text-slate-500">
            Bathrooms
          </p>

          <h4 className="mt-1 text-xl font-semibold">
            {property.bathrooms}
          </h4>

        </div>

        <div className="rounded-2xl border p-5">

          <Ruler className="mb-3 h-7 w-7 text-blue-600" />

          <p className="text-sm text-slate-500">
            Area
          </p>

          <h4 className="mt-1 text-xl font-semibold">
            {property.area} Sq.ft
          </h4>

        </div>

        <div className="rounded-2xl border p-5">

          <Building2 className="mb-3 h-7 w-7 text-blue-600" />

          <p className="text-sm text-slate-500">
            Property Type
          </p>

          <h4 className="mt-1 text-xl font-semibold">
            {property.propertyType}
          </h4>

        </div>

      </div>

      {/* Description */}

      <div className="mt-10">

        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Description
        </h2>

        <p className="leading-8 text-slate-600">
          {property.description}
        </p>

      </div>

    </section>
  );
}