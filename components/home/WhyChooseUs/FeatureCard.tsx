interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

        <Icon
          size={32}
          className="text-blue-600"
        />

      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

    </div>
  );
}