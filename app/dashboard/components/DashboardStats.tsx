import {
  Building2,
  Users,
  UserRound,
  MessageSquare,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

const stats = [
  {
    title: "Total Properties",
    value: 245,
    icon: Building2,
    color: "bg-blue-600",
    increase: "+12%",
  },
  {
    title: "Customers",
    value: 520,
    icon: Users,
    color: "bg-emerald-600",
    increase: "+8%",
  },
  {
    title: "Agents",
    value: 18,
    icon: UserRound,
    color: "bg-orange-500",
    increase: "+5%",
  },
  {
    title: "Enquiries",
    value: 89,
    icon: MessageSquare,
    color: "bg-violet-600",
    increase: "+18%",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => (
        <DashboardCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          color={item.color}
          increase={item.increase}
        />
      ))}

    </section>
  );
}