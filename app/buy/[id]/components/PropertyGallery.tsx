"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/properties/property-1.jpg",
  "/properties/property-2.jpg",
  "/properties/property-3.jpg",
  "/properties/property-4.jpg",
];

export default function PropertyGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-12 gap-4">

      {/* Main Image */}

      <div className="col-span-12 lg:col-span-9">

        <div className="relative h-130 overflow-hidden rounded-3xl">

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={selectedImage}
                alt="Property"
                fill
                priority
                loading="eager"
                className="object-cover"
              />
            </motion.div>

          </AnimatePresence>

        </div>

      </div>

      {/* Right Thumbnails */}

      <div className="col-span-12 flex gap-4 lg:col-span-3 lg:flex-col">

        {images.slice(1).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`
              relative
              h-32
              flex-1
              overflow-hidden
              rounded-2xl
              transition-all
              ${
                selectedImage === image
                  ? "ring-4 ring-blue-600"
                  : "hover:opacity-80"
              }
            `}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              loading="eager"
              className="object-cover"
            />

            {/* Last Image Overlay */}

            {index === 2 && (
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/45
                  text-lg
                  font-bold
                  text-white
                "
              >
                +12 Photos
              </div>
            )}

          </button>
        ))}

      </div>

    </div>
  );
}