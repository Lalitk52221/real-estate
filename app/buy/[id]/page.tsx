// import AgentCard from "./components/AgentCard";
// import Amenities from "./components/Amenities";
// import LocationMap from "./components/LocationMap";
// import PropertyGallery from "./components/PropertyGallery";
// import PropertyHighlights from "./components/PropertyHighlights";
// import PropertyInfo from "./components/PropertyInfo";
// import SimilarProperties from "./components/SimilarProperties";

export default function PropertyDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">

        {/* Breadcrumb */}

        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">

          <span>Home</span>

          <span>/</span>

          <span>Buy</span>

          <span>/</span>

          <span className="font-medium text-slate-900">
            Residential Plot In Sohna
          </span>

        </div>

        <div className="grid grid-cols-12 gap-8">

          {/* LEFT */}

          <section className="col-span-12 lg:col-span-8">

            {/* <PropertyGallery /> */}

            {/* <PropertyInfo /> */}

            {/* <PropertyHighlights /> */}

            {/* <Amenities /> */}

            {/* <LocationMap /> */}

          </section>

          {/* RIGHT */}

          <aside className="col-span-12 lg:col-span-4">

            {/* <AgentCard /> */}

          </aside>

        </div>

        {/* <SimilarProperties /> */}

      </div>

    </main>
  );
}