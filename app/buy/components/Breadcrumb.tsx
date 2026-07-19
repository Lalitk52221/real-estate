import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500">

      <Link
        href="/"
        className="transition hover:text-blue-600"
      >
        Home
      </Link>

      <ChevronRight size={16} />

      <Link
        href="/buy"
        className="transition hover:text-blue-600"
      >
        Buy
      </Link>

      <ChevronRight size={16} />

      <span className="font-medium text-slate-900">
        All Properties
      </span>

    </nav>
  );
}