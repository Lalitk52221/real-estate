export default function SocialSettings() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Social Media
      </h2>

      <div className="grid gap-6">

        <input
          className="rounded-xl border p-3"
          placeholder="Facebook URL"
        />

        <input
          className="rounded-xl border p-3"
          placeholder="Instagram URL"
        />

        <input
          className="rounded-xl border p-3"
          placeholder="LinkedIn URL"
        />

        <input
          className="rounded-xl border p-3"
          placeholder="YouTube URL"
        />

      </div>

    </section>
  );
}