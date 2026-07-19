import Navbar from "@/components/layout/Navbar";
import FilterSidebar from "./components/FilterSidebar";
import ListingHeader from "./components/ListingHeader";
import Pagination from "./components/Pagination";
// import Pagination from "./components/Pagination";
// import PropertyCard from "./components/PropertyCard";
import PropertyGrid from "./components/PropertyGrid";

export default function BuyPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <ListingHeader />

        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* Sidebar */}

          <aside className="col-span-12 md:col-span-3">
            <FilterSidebar />
          </aside>

          {/* Property Listing */}

          <section className="col-span-12 md:col-span-9">
            <PropertyGrid />

            <Pagination
            //   currentPage={page}
            //   totalPages={totalPages}
            //   onPageChange={setPage}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
