import Image from "next/image";
import PropertyCard from "../../components/PropertyCard";
import { propertyData } from "../../data/propertyData";

interface Props {
  params: { id: string };
  searchParams?: { img?: string };
}

export default function ImageDetailsPage({ params, searchParams }: Props) {
  const id = Number(params.id);
  const property = propertyData.find((p) => p.id === id);
  const img = searchParams?.img || property?.image || "/images/property1.jpg";

  const related = propertyData.filter((p) => p.id !== id).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <span>Home</span>

          <span>/</span>

          <span>Buy</span>

          <span>/</span>

          <span className="font-medium text-slate-900">Image Details</span>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <section className="col-span-12 lg:col-span-8">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
              <div className="relative h-120">
                <Image src={img} alt="Image Detail" fill className="object-contain bg-black" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900">Image Properties</h2>

                <div className="mt-4 text-sm text-slate-700">
                  <p>
                    <strong>Source:</strong> {img}
                  </p>

                  {property && (
                    <>
                      <p>
                        <strong>Property:</strong> {property.title}
                      </p>

                      <p>
                        <strong>Location:</strong> {property.location}
                      </p>

                      <p>
                        <strong>Price:</strong> {property.price}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <aside className="col-span-12 lg:col-span-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Related Properties</h3>

                <div className="mt-4 grid grid-cols-1 gap-4">
                  {related.map((r) => (
                    <PropertyCard
                      key={r.id}
                      id={r.id}
                      title={r.title}
                      location={r.location}
                      image={r.image}
                      price={r.price}
                      area={r.area}
                      bedrooms={r.bedrooms}
                      featured={r.featured}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
