import {
  Pencil,
  Trash2,
} from "lucide-react";

const properties = [
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
    location: "Sohna",
    price: "₹45 Lakh",
    status: "Sold",
  },
  {
    id: 3,
    title: "Apartment",
    location: "Sector 56",
    price: "₹1.3 Cr",
    status: "Available",
  },
];

export default function PropertyTable() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Property
            </th>

            <th className="px-6 py-4 text-left">
              Location
            </th>

            <th className="px-6 py-4 text-left">
              Price
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {properties.map((property) => (
            <tr
              key={property.id}
              className="border-t"
            >
              <td className="px-6 py-5 font-semibold">
                {property.title}
              </td>

              <td className="px-6 py-5">
                {property.location}
              </td>

              <td className="px-6 py-5">
                {property.price}
              </td>

              <td className="px-6 py-5">

                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    property.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {property.status}
                </span>

              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center gap-3">

                  <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                    <Pencil size={18} />
                  </button>

                  <button className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200">
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}