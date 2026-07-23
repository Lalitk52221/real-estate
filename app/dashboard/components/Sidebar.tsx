"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  UserRound,
  MessageSquare,
  Settings,
  LogOut,
  PlusCircle,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Properties",
    href: "/dashboard/properties",
    icon: Building2,
  },
  {
    title: "Add Property",
    href: "/dashboard/properties/add",
    icon: PlusCircle,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Agents",
    href: "/dashboard/agents",
    icon: UserRound,
  },
  {
    title: "Enquiries",
    href: "/dashboard/enquiries",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="border-b border-slate-200 p-6">

        <h1 className="text-2xl font-bold text-blue-600">
          RealtyPro
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Admin Dashboard
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all
                ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-4">

        <button
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-sm
            font-medium
            text-red-500
            transition
            hover:bg-red-50
          "
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}