"use client"
import Container from "@/components/layout/Container";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials";
import {motion} from "framer-motion"
export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-15">
      <Container>

        <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8}}
        className="mb-14 text-center">
          <h2 className="text-5xl font-bold">
            What Our Clients Say  
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item,i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay:i*0.2 }}>
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}