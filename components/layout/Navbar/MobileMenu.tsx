"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { title: "Home", href: "/" },
  { title: "Buy", href: "/buy" },
  { title: "Rent", href: "/rent" },
  { title: "Sell", href: "/sell" },
  { title: "Projects", href: "/projects" },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        className="lg:hidden p-2 rounded-md text-slate-700 hover:text-blue-600"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay behind menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />
            {/* Drawer menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-3 right-0 w-64 bg-white rounded-l-md shadow-xl z-60 px-6 flex flex-col"
            >
              {/* Close button inside drawer */}
              <button
                className="absolute top-1 right-5 p-2 text-slate-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                <X size={28} />
              </button>
              <ul className=" bg-white rounded-l-md px-6 w-64 -ml-6 ">
                {links.map((link) => (
                  <motion.li
                    key={link.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-lg font-medium text-slate-700 hover:text-blue-600"
                      onClick={() => setOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            {/* Drawer menu */}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
