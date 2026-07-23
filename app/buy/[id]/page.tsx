import PropertyGallery from "./components/PropertyGallery";
import { propertyData } from "../data/propertyData";
import PropertyInfo from "./components/PropertyInfo";
import PropertyHighlights from "./components/PropertyHighlights";
import Amenities from "./components/Amenities";
import AgentCard from "./components/AgentCard";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawId = resolvedParams?.id || String(resolvedParams);

  // support ids like "1", "01", "001"
  const idNumber = Number(rawId);
  const paddedMatch = (n: number) => {
    if (!rawId) return false;
    return String(n).padStart(rawId.length, "0") === rawId;
  };

  const property = propertyData.find(
    (item) => item.id === idNumber || paddedMatch(item.id),
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Breadcrumb */}

        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <span><Link href={"/"}>Home</Link></span>

          <span>/</span>

          {/* <span><Link href={"/buy"}>Buy</Link></span> */}

          {/* <span>/</span> */}

          <span className="font-medium text-slate-900">
            Residential Plot In Sohna
          </span>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* LEFT */}

          <section className="col-span-12 lg:col-span-8 gap-5 flex flex-col ">
            {property ? (
              <>
                <PropertyGallery
                  image={property.image}
                  propertyId={property.id}
                />
                <PropertyInfo property={property} />
                <PropertyHighlights property={property} />
                <Amenities property={property} />
              </>
            ) : (
              <p>Property not found</p>
            )}

            {/* <LocationMap /> */}
          </section>

          {/* RIGHT */}

          <aside className="col-span-12 lg:col-span-4">
            {property ? <AgentCard property={property} /> : ""}
          </aside>
        </div>

        {/* <SimilarProperties /> */}
      </div>
    </main>
  );
}
