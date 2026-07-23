import Link from "next/link";
import { Plus, Search } from "lucide-react";

export default function PropertyToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-2xl font-bold text-slate-900">
          Properties
        </h2>

        <p className="mt-1 text-slate-500">
          Manage all property listings.
        </p>

      </div>

      <div className="flex flex-col gap-3 sm:flex-row">

        <div className="relative">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search property..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:border-blue-600 sm:w-72"
          />

        </div>

        <Link
          href="/dashboard/properties/add"
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />

          Add Property
        </Link>

      </div>

    </div>
  );
}