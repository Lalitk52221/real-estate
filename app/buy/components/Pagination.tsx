"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 4;

  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <div className="w-full mt-10 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">

      {/* Showing Result */}

      <p className="text-sm text-slate-500">
        Showing
        <span className="mx-1 font-semibold text-slate-900">
          1–7
        </span>
        of
        <span className="mx-1 font-semibold text-slate-900">
          128
        </span>
        Properties
      </p>

      {/* Pagination */}

      <div className="flex items-center gap-2">

        {/* Previous */}

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prev) => Math.max(prev - 1, 1))
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            transition
            hover:border-blue-600
            hover:text-blue-600
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              text-sm
              font-semibold
              transition
              ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next */}

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, totalPages)
            )
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            transition
            hover:border-blue-600
            hover:text-blue-600
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronRight size={18} />
        </button>

      </div>

    </div>
  );
}