"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="bg-blue-900 py-18">
      <Container>
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Ready To Find Your Dream Property?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg text-blue-100"
          >
            Buy, Sell and Rent verified properties with complete legal
            assistance and expert guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <Link
              href="/properties"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Browse Properties
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
