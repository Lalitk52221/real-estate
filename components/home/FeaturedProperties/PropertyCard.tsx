import Image from "next/image";
import { Bath, BedDouble, Heart, MapPin, Ruler } from "lucide-react";
import Link from "next/link";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    price: string;
    location: string;
    image: string;
    type: string;
    beds: number;
    baths: number;
    area: string;
    verified: boolean;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}

      <div className="relative overflow-hidden">
        <Link href={`/buy/${property.id}`} >
        <Image
          src={property.image}
          alt={property.title}
          width={600}
          height={450}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
          />
          </Link>

        {/* Featured Badge */}

        <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
          {property.type}
        </span>

        {/* Heart */}

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:scale-110">
          <Heart size={18} className="text-red-500" />
        </button>
      </div>

      {/* Content */}

      <div className="p-5">
        <h3 className="text-2xl font-bold text-slate-900">{property.price}</h3>

        <h4 className="mt-2 text-lg font-semibold">{property.title}</h4>

        <div className="mt-3 flex items-center gap-2 text-slate-500">
          <MapPin size={16} />

          <span>{property.location}</span>
        </div>

        {/* Divider */}

        <div className="my-5 h-px bg-slate-200"></div>

        {/* Property Info */}

        <div className="flex items-center justify-between text-slate-600">
          <div className="flex items-center gap-2">
            <BedDouble size={18} />

            <span>{property.beds}</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />

            <span>{property.baths}</span>
          </div>

          <div className="flex items-center gap-2">
            <Ruler size={18} />

            <span>{property.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
