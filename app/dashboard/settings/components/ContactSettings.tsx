import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSettings() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Contact Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 flex items-center gap-2 font-medium">
            <Phone size={18} />
            Phone
          </label>

          <input
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 font-medium">
            <Mail size={18} />
            Email
          </label>

          <input
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 flex items-center gap-2 font-medium">
            <MapPin size={18} />
            Office Address
          </label>

          <textarea
            rows={4}
            className="w-full rounded-xl border p-3"
          />
        </div>

      </div>

    </section>
  );
}