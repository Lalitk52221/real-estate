import { Building2, Upload } from "lucide-react";

export default function CompanySettings() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">
        <Building2 className="text-blue-600" />
        <h2 className="text-2xl font-bold">
          Company Information
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Company Name
          </label>

          <input
            className="w-full rounded-xl border p-3"
            placeholder="RealtyPro"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Website
          </label>

          <input
            className="w-full rounded-xl border p-3"
            placeholder="https://example.com"
          />
        </div>

        <div className="md:col-span-2">

          <label className="mb-2 block font-medium">
            Company Logo
          </label>

          <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 p-8 hover:border-blue-600">

            <Upload />

            Upload Logo

            <input
              type="file"
              className="hidden"
            />

          </label>

        </div>

      </div>

    </section>
  );
}