"use client";

import { usePathname } from "next/navigation";
import {
  Bell,
  Search,
  Moon,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/properties": "Properties",
  "/dashboard/properties/add": "Add Property",
  "/dashboard/customers": "Customers",
  "/dashboard/agents": "Agents",
  "/dashboard/enquiries": "Enquiries",
  "/dashboard/settings": "Settings",
};

export default function Header() {
  const pathname = usePathname();

  const title = pageTitles[pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back 👋
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600"
          />

        </div>

        {/* Theme */}

        <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">

          <Moon size={20} />

        </button>

        {/* Notification */}

        <button className="relative rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 transition hover:bg-slate-100">

          <Image
            src="/images/Lalit.jpg"
            alt="Admin"
            width={40}
            height={40}
            className="h-11 w-11 rounded-full object-cover"
          />

          <div className="hidden text-left lg:block">

            <h4 className="font-semibold">
              Lalit Kumar
            </h4>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

          <ChevronDown size={18} />

        </button>

      </div>

    </header>
  );
}