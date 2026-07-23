import { Lock } from "lucide-react";

export default function SecuritySettings() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <Lock className="text-red-500" />
        <h2 className="text-2xl font-bold">
          Security
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="password"
          placeholder="Current Password"
          className="rounded-xl border p-3"
        />

        <input
          type="password"
          placeholder="New Password"
          className="rounded-xl border p-3"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="rounded-xl border p-3 md:col-span-2"
        />

      </div>

      <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
        Update Password
      </button>

    </section>
  );
}