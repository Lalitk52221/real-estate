import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-400 bg-white">
        <span className="text-lg font-bold text-blue-700">
          RE
        </span>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          RealEstate
        </h2>

        <p className="text-xs text-slate-500">
          Find • Buy • Sell
        </p>
      </div>
    </Link>
  );
}