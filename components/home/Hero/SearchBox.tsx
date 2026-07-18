"use client";
import Button from "@/components/ui/Button";
import Tabs from "./Tabs";
import { motion } from "framer-motion";

export default function SearchBox() {
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
        delay: 0.2,
      }}
      className="absolute -bottom-70 md:-bottom-6 left-1/2 w-full max-w-6xl -translate-x-1/2"
    >
      <Tabs />

      <div className="rounded-b-3xl rounded-r-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.15)]">
        <div className="grid gap-6 md:grid-cols-4 ">
          <div>
            <label className="mb-2 block text-sm font-semibold">Location</label>

            <input
              placeholder="Enter location or city"
              className="w-full rounded-md border border-slate-300 p-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Property Type
            </label>

            <select className="w-full rounded-md border border-slate-300 p-3">
              <option>All Type</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Budget</label>

            <select className="w-full rounded-md border border-slate-300 p-3">
              <option>Any Budget</option>
            </select>
          </div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
              
            }}
          >
            <Button className="mt-6 bg-amber-500 text-white hover:bg-amber-600">
              Search Property
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
