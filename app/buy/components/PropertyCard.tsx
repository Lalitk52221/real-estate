"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, Heart, MapPin, Maximize } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  image: string;
  price: string;
  area: string;
  bedrooms: number;
  featured?: boolean;
}

export default function PropertyCard({
  id,
  title,
  location,
  image,
  price,
  area,
  bedrooms,
  featured,
}: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-shadow
        hover:shadow-xl
      "
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}

        <div className="relative h-56 w-full md:h-auto md:w-77.5">
          <Image src={image} alt={title} fill className="object-cover" />

          {featured && (
            <span
              className="
                absolute
                left-4
                top-4
                rounded-md
                bg-orange-400
                px-3
                py-1
                text-xs
                font-semibold
                text-white
              "
            >
              Featured
            </span>
          )}

          <button
            className="
              absolute
              right-4
              top-4
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow
            "
          >
            <Heart size={18} className="text-red-500" />
          </button>
        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />

              {location}
            </div>

            <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Maximize size={18} />

                {area}
              </div>

              <div className="flex items-center gap-2">
                <BedDouble size={18} />
                {bedrooms} Beds
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Starting From</p>

              <h2 className="text-2xl font-bold text-blue-700">{price}</h2>
            </div>

            <Link
              href={`/buy/${id}`}
              className="
                rounded-xl
                bg-orange-400
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-orange-500
              "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
