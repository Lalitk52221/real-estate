"use client";

import { SlidersHorizontal } from "lucide-react";

const propertyTypes = [
  "All Type",
  "Plots",
  "Flats",
  "Houses",
  "Villas",
  "Commercial",
];

const bedrooms = ["1+", "2+", "3+", "4+", "5+"];

const bathrooms = ["1+", "2+", "3+", "4+"];

export default function FilterSidebar() {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <SlidersHorizontal
            size={18}
            className="text-blue-600"
          />

          <h3 className="font-semibold text-slate-900">
            Filters
          </h3>

        </div>

        <button className="text-sm font-medium text-blue-600">
          Clear All
        </button>

      </div>

      {/* Location */}

      <div className="mt-8">

        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Location
        </label>

        <input
          type="text"
          placeholder="Enter location or city"
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-600
          "
        />

      </div>

      {/* Property Type */}

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold">
          Property Type
        </h4>

        <div className="space-y-3">

          {propertyTypes.map((item, index) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                defaultChecked={index === 0}
                className="h-4 w-4 accent-blue-600"
              />

              <span className="text-sm text-slate-600">
                {item}
              </span>

            </label>
          ))}

        </div>

      </div>

      {/* Budget */}

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold">
          Budget
        </h4>

        <input
          type="range"
          min={10}
          max={500}
          defaultValue={80}
          className="w-full accent-blue-600"
        />

        <div className="mt-3 flex justify-between">

          <div className="rounded-lg border px-3 py-2 text-xs">
            ₹10 Lakh
          </div>

          <div className="rounded-lg border px-3 py-2 text-xs">
            ₹5 Cr
          </div>

        </div>

      </div>

      {/* Area */}

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold">
          Area (Sq Ft)
        </h4>

        <div className="grid grid-cols-2 gap-3">

          <input
            placeholder="Min Area"
            className="rounded-xl border px-3 py-3 text-sm"
          />

          <input
            placeholder="Max Area"
            className="rounded-xl border px-3 py-3 text-sm"
          />

        </div>

      </div>

      {/* Bedrooms */}

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold">
          Bedrooms
        </h4>

        <div className="flex flex-wrap gap-2">

          {bedrooms.map((item) => (
            <button
              key={item}
              className="
                rounded-lg
                border
                px-4
                py-2
                text-sm
                transition
                hover:bg-blue-600
                hover:text-white
              "
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* Bathrooms */}

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold">
          Bathrooms
        </h4>

        <div className="flex flex-wrap gap-2">

          {bathrooms.map((item) => (
            <button
              key={item}
              className="
                rounded-lg
                border
                px-4
                py-2
                text-sm
                transition
                hover:bg-blue-600
                hover:text-white
              "
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* Status */}

      <div className="mt-8">

        <h4 className="mb-4 text-sm font-semibold">
          Property Status
        </h4>

        <div className="space-y-3">

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="accent-blue-600"
            />

            Ready to Move
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="accent-blue-600"
            />

            Under Construction
          </label>

        </div>

      </div>

      {/* Button */}

      <button
        className="
          mt-8
          w-full
          rounded-xl
          bg-blue-600
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
        "
      >
        Apply Filters
      </button>

    </aside>
  );
}