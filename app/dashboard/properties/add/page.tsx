"use client";

import { useState } from "react";
import {
  Save,
  ImagePlus,
} from "lucide-react";

export default function AddPropertyPage() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    propertyType: "",
    purpose: "Buy",
    location: "",
    city: "",
    state: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formData);

    // API Call Later
  }

  return (
    <div className="mx-auto max-w-6xl">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Add New Property
        </h1>

        <p className="mt-2 text-slate-500">
          Fill in the property details below.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >

        {/* Basic Information */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-xl font-semibold">
            Basic Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-medium">
                Property Title
              </label>

              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                placeholder="Luxury Villa"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Price
              </label>

              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                placeholder="25000000"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Property Type
              </label>

              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              >
                <option value="">Select</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Plot</option>
                <option>Farm House</option>
                <option>Office</option>
              </select>

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Purpose
              </label>

              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              >
                <option>Buy</option>
                <option>Rent</option>
              </select>

            </div>

          </div>

        </div>

        {/* Location */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-xl font-semibold">
            Location
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="rounded-xl border p-3"
              placeholder="Sector 56"
            />

            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="rounded-xl border p-3"
              placeholder="Gurugram"
            />

            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="rounded-xl border p-3"
              placeholder="Haryana"
            />

          </div>

        </div>

        {/* Property Details */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-xl font-semibold">
            Property Details
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <input
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="rounded-xl border p-3"
              placeholder="Bedrooms"
            />

            <input
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="rounded-xl border p-3"
              placeholder="Bathrooms"
            />

            <input
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="rounded-xl border p-3"
              placeholder="Area (Sq.ft)"
            />

          </div>

        </div>

        {/* Description */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-xl font-semibold">
            Description
          </h2>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="w-full rounded-xl border p-4"
            placeholder="Write property description..."
          />

        </div>

        {/* Image Upload */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-xl font-semibold">
            Property Images
          </h2>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 py-12 transition hover:border-blue-600">

            <ImagePlus
              size={48}
              className="text-slate-400"
            />

            <p className="mt-4 font-medium">
              Click to Upload Images
            </p>

            <p className="text-sm text-slate-500">
              JPG, PNG, WEBP
            </p>

            <input
              type="file"
              multiple
              className="hidden"
            />

          </label>

        </div>

        {/* Submit */}

        <div className="flex justify-end">

          <button
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
          >
            <Save size={20} />

            Save Property
          </button>

        </div>

      </form>

    </div>
  );
}