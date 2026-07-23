import {
  Eye,
  Pencil,
  Trash2,
  Phone,
  Mail,
  BadgeCheck,
} from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Rohit Singh",
    email: "rohit@gmail.com",
    phone: "+91 9876543210",
    city: "Gurugram",
    properties: 32,
    status: "Active",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    email: "anjali@gmail.com",
    phone: "+91 9876543211",
    city: "Delhi",
    properties: 18,
    status: "Inactive",
  },
  {
    id: 3,
    name: "Vikas Kumar",
    email: "vikas@gmail.com",
    phone: "+91 9876543212",
    city: "Noida",
    properties: 24,
    status: "Active",
  },
];

export default function AgentTable() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Agent</th>
            <th className="px-6 py-4 text-left">Contact</th>
            <th className="px-6 py-4 text-left">City</th>
            <th className="px-6 py-4 text-left">Properties</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {agents.map((agent) => (

            <tr
              key={agent.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-5">

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="font-semibold">
                      {agent.name}
                    </h3>

                    {agent.status === "Active" && (
                      <BadgeCheck
                        size={18}
                        className="text-blue-600"
                      />
                    )}

                  </div>

                  <p className="text-sm text-slate-500">
                    {agent.email}
                  </p>

                </div>

              </td>

              <td className="px-6 py-5">

                <div className="space-y-1">

                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={14} />
                    {agent.phone}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Mail size={14} />
                    {agent.email}
                  </div>

                </div>

              </td>

              <td className="px-6 py-5">
                {agent.city}
              </td>

              <td className="px-6 py-5 font-semibold">
                {agent.properties}
              </td>

              <td className="px-6 py-5">

                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    agent.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {agent.status}
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