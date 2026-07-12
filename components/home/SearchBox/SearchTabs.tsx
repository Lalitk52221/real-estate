"use client";

const tabs = ["Buy", "Rent", "Sell"];

export default function SearchTabs() {
  return (
    <div className="flex w-fit rounded-2xl bg-slate-100 p-1">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`rounded-xl px-6 py-3 font-semibold transition ${
            index === 0
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}