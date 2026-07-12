const stats = [
  {
    number: "500+",
    title: "Properties",
  },
  {
    number: "200+",
    title: "Happy Clients",
  },
  {
    number: "15+",
    title: "Cities",
  },
];

export default function Stats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-8">
      {stats.map((item) => (
        <div key={item.title} className="text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            {item.number}
          </h2>

          <p className="mt-2 text-slate-600">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}