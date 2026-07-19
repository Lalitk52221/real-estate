"use client";

import Link from "next/link";
import { ChevronRight, ChevronDown, LayoutGrid, List } from "lucide-react";

export default function ListingHeader() {
  return (
    <div>
      {/* Breadcrumb */}

      <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">

        <Link
          href="/"
          className="hover:text-blue-600 transition"
        >
          Home
        </Link>

        <ChevronRight size={14} />

        <Link
          href="/buy"
          className="hover:text-blue-600 transition"
        >
          Buy
        </Link>

        <ChevronRight size={14} />

        <span className="font-medium text-slate-900">
          All Properties
        </span>

      </div>

      {/* Title */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Buy Properties
          </h1>

          <p className="mt-2 text-slate-500">
            12,500+ properties available
          </p>
        </div>

        {/* Right Controls */}

        <div className="flex items-center gap-3">

          {/* Sort */}

          <div className="flex items-center gap-3">

            <span className="text-sm text-slate-500">
              Sort by
            </span>

            <button
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                text-sm
                font-semibold
                shadow-sm
                transition
                hover:border-blue-500
              "
            >
              Newest First

              <ChevronDown size={16} />
            </button>

          </div>

          {/* Grid View */}

          <button
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              text-white
              shadow-md
            "
          >
            <LayoutGrid size={20} />
          </button>

          {/* List View */}

          <button
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-sm
              transition
              hover:bg-slate-100
            "
          >
            <List size={20} />
          </button>

        </div>

      </div>
    </div>
  );
}