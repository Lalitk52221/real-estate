"use client";

import { motion } from "framer-motion";

import PropertyCard from "./PropertyCard";
import { propertyData } from "../data/propertyData";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function PropertyGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {propertyData.map((property) => (
        <motion.div
          key={property.id}
          variants={itemVariants}
        >
          <PropertyCard
            id={property.id}
            title={property.title}
            location={property.location}
            image={property.image}
            price={property.price}
            area={property.area}
            bedrooms={property.bedrooms}
            featured={property.featured}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}