import Link from "next/link";

interface Props {
  title: string;
  count: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

export default function CategoryCard({
  title,
  count,
  icon: Icon,
  color,
  iconColor,
}: Props) {
  return (
    <Link
      href="/properties"
      className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
      >
        <Icon className={iconColor} size={30} />
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {count}
      </p>
    </Link>
  );
}