"use client"
import Container from "@/components/layout/Container";
import CategoryCard from "./CategoryCard";
import { categories } from "./data";
import {motion} from "framer-motion"

export default function Categories() {
  return (
    <section className="py-20 mt-60  md:my-0">
      <Container>

        <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay:0.2 }}
        className="mb-14 flex items-end justify-between">

          <div>

            <p 
            
            className="font-semibold uppercase tracking-widest text-blue-600">
              Categories
            </p>

            <h2 className="mt-3 text-5xl font-bold">
              Explore Top Categories
            </h2>

            <p className="mt-4 text-slate-500">
              Find the perfect property according to your needs.
            </p>

          </div>

        </motion.div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 lg:grid-cols-5">
          {categories.map((item) => (
            <CategoryCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}