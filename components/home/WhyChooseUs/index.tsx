"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

import { features } from "./features";
import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="font-semibold uppercase tracking-[4px] text-blue-600">
              WHY CHOOSE US
            </motion.p>

            <motion.h2 
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay:0.2 }}
            className="mt-4 text-5xl font-bold">
              Trusted Real Estate Partner
            </motion.h2>

            <motion.p 
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay:0.3 }}
            className="mt-6 text-lg text-slate-500">
              We help buyers and sellers make confident property decisions with
              verified listings, transparent pricing and expert guidance.
            </motion.p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature,i ) => (
                <motion.div key={i}
                 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay:i*0.1 }}
                 >

                <FeatureCard key={feature.title} {...feature} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}

          <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay:0.7 }}
          >
            <Image
              src="/images/property1.jpg"
              alt="Why Choose Us"
              width={700}
              height={800}
              className="rounded-4xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
