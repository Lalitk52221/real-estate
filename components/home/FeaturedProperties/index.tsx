"use client"
import {motion} from "framer-motion"
import Container from "@/components/layout/Container";
import PropertyCard from "./PropertyCard";
import { properties } from "./properties";

export default function FeaturedProperties() {
  return (
    <section className="bg-[#081625] py-15">

      <Container>

        <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5}}
        className="mb-14 flex items-center justify-between">

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

        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-4 xl:grid-cols-4">

          {properties.map((property,i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              key={property.id}
            >

            <PropertyCard
              
              property={property}
              />
              </motion.div>
          ))}

        </motion.div>

      </Container>

    </section>
  );
}