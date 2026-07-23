import { Search, Filter } from "lucide-react";

export default function EnquiryToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Enquiries
        </h2>

        <p className="mt-1 text-slate-500">
          Track and manage all customer enquiries.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search enquiry..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:border-blue-600 sm:w-72"
          />

        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-100">

          <Filter size={18} />

          Filter

        </button>

      </div>

    </div>
  );
}