import {
//   Building2,
//   Users,
//   UserRound,
//   MessageSquare,
//   ArrowUpRight,
} from "lucide-react";
import DashboardStats from "./components/DashboardStats";



const recentProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "DLF Phase 1",
    price: "₹2.4 Cr",
    status: "Available",
  },
  {
    id: 2,
    title: "Residential Plot",
    location: "Sohna Road",
    price: "₹45 Lakh",
    status: "Sold",
  },
  {
    id: 3,
    title: "Modern Apartment",
    location: "Sector 56",
    price: "₹1.2 Cr",
    status: "Available",
  },
];

const recentEnquiries = [
  {
    id: 1,
    customer: "Rahul Sharma",
    phone: "9876543210",
    property: "Luxury Villa",
  },
  {
    id: 2,
    customer: "Amit Kumar",
    phone: "9876543211",
    property: "Residential Plot",
  },
  {
    id: 3,
    customer: "Priya Verma",
    phone: "9876543212",
    property: "Apartment",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Welcome */}

      <section className="rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white">

        <h1 className="text-3xl font-bold">
          Welcome Back, Lalit 👋
        </h1>

        <p className="mt-3 text-blue-100">
          Here&apos;s what&apos;s happening with your real estate business today.
        </p>

      </section>

      {/* Statistics */}
      <DashboardStats/>

      

      {/* Tables */}

      <section className="grid gap-8 xl:grid-cols-2">

        {/* Recent Properties */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="mb-6 text-xl font-bold">
            Recent Properties
          </h2>

          <div className="space-y-5">

            {recentProperties.map((property) => (
              <div
                key={property.id}
                className="flex items-center justify-between rounded-2xl border p-4"
              >
                <div>

                  <h3 className="font-semibold">
                    {property.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {property.location}
                  </p>

                </div>

                <div className="text-right">

                  <p className="font-semibold">
                    {property.price}
                  </p>

                  <span
                    className={`text-sm ${
                      property.status === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {property.status}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Recent Enquiries */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="mb-6 text-xl font-bold">
            Recent Enquiries
          </h2>

          <div className="space-y-5">

            {recentEnquiries.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl border p-4"
              >
                <div>

                  <h3 className="font-semibold">
                    {item.customer}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.phone}
                  </p>

                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {item.property}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}