"use client"
import { motion } from "framer-motion";
export default function HeroContent() {
  return (
    <motion.div 
    initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    className="max-w-xl text-white" >
      <h1 className="max-w-xl text-5xl font-bold leading-tight lg:text-6xl">
        Find Your <br />
        Dream Property
      </h1>

      <p className="mt-6 text-lg text-gray-200">
        Buy, Sell or Rent the best properties
        <br />
        with trusted real estate experts.
      </p>
    </motion.div>
  );
}