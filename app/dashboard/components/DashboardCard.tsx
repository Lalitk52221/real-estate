import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  increase: string;
}

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  color,
  increase,
}: DashboardCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {value}
          </h2>

        </div>

        <div
          className={`rounded-2xl p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${color}`}
        >
          <Icon size={30} />
        </div>

      </div>

      <div className="mt-6 flex items-center gap-2">

        <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-green-700">

          <ArrowUpRight size={16} />

          <span className="text-sm font-semibold">
            {increase}
          </span>

        </div>

        <span className="text-sm text-slate-500">
          Compared to last month
        </span>

      </div>

    </div>
  );
}