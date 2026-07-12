"use client";

const tabs = ["Buy", "Rent", "Sell"];

export default function Tabs() {
  return (
    <div className="flex gap-1">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-12 rounded-t-md py-4 font-semibold transition
          ${
            index === 0
              ? " bg-white text-black"
              : "bg-slate-700/70  text-white backdrop-blur-md"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}