import {
  Eye,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

const enquiries = [
  {
    id: 1,
    customer: "Rahul Sharma",
    phone: "+91 9876543210",
    email: "rahul@gmail.com",
    property: "Luxury Villa",
    agent: "Rohit Singh",
    status: "New",
    priority: "High",
    followUp: "25 Jul 2026",
  },
  {
    id: 2,
    customer: "Priya Verma",
    phone: "+91 9876543211",
    email: "priya@gmail.com",
    property: "Apartment",
    agent: "Anjali Sharma",
    status: "Contacted",
    priority: "Medium",
    followUp: "26 Jul 2026",
  },
  {
    id: 3,
    customer: "Amit Kumar",
    phone: "+91 9876543212",
    email: "amit@gmail.com",
    property: "Residential Plot",
    agent: "Vikas Kumar",
    status: "Site Visit",
    priority: "Low",
    followUp: "28 Jul 2026",
  },
];

export default function EnquiryTable() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Customer</th>
            <th className="px-6 py-4 text-left">Property</th>
            <th className="px-6 py-4 text-left">Agent</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Priority</th>
            <th className="px-6 py-4 text-left">Follow Up</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {enquiries.map((item) => (

            <tr
              key={item.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-5">

                <div>

                  <h3 className="font-semibold">
                    {item.customer}
                  </h3>

                  <div className="mt-1 space-y-1">

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Phone size={14} />
                      {item.phone}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Mail size={14} />
                      {item.email}
                    </div>

                  </div>

                </div>

              </td>

              <td className="px-6 py-5 font-medium">
                {item.property}
              </td>

              <td className="px-6 py-5">
                {item.agent}
              </td>

              <td className="px-6 py-5">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {item.status}
                </span>

              </td>

              <td className="px-6 py-5">

                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    item.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : item.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {item.priority}
                </span>

              </td>

              <td className="px-6 py-5">

                <div className="flex items-center gap-2">

                  <Calendar size={16} />

                  {item.followUp}

                </div>

              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center">

                  <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">

                    <Eye size={18} />

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