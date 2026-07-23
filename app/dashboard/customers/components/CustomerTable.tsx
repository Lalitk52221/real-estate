import {
  Eye,
  Pencil,
  Trash2,
  Phone,
  Mail,
} from "lucide-react";

const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    city: "Gurugram",
    interested: "Luxury Villa",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@gmail.com",
    phone: "+91 9876543211",
    city: "Delhi",
    interested: "Residential Plot",
    status: "Pending",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    phone: "+91 9876543212",
    city: "Noida",
    interested: "Apartment",
    status: "Active",
  },
];

export default function CustomerTable() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <table className="w-full">

        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Customer</th>
            <th className="px-6 py-4 text-left">Contact</th>
            <th className="px-6 py-4 text-left">City</th>
            <th className="px-6 py-4 text-left">Interested In</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-6 py-5">
                <div>
                  <h3 className="font-semibold">
                    {customer.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {customer.email}
                  </p>
                </div>
              </td>

              <td className="px-6 py-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={14} />
                    {customer.phone}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Mail size={14} />
                    {customer.email}
                  </div>
                </div>
              </td>

              <td className="px-6 py-5">
                {customer.city}
              </td>

              <td className="px-6 py-5">
                {customer.interested}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    customer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {customer.status}
                </span>
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-center gap-2">
                  <button className="rounded-lg bg-slate-100 p-2 hover:bg-slate-200">
                    <Eye size={18} />
                  </button>

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