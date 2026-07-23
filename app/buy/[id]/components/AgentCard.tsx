import Image from "next/image";
import {
  Mail,
  Phone,
  MessageCircle,
  UserRound,
} from "lucide-react";

import { Property } from "@/app/buy/data/propertyData";

interface AgentCardProps {
  property: Property;
}

export default function AgentCard({
  property,
}: AgentCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Heading */}

      <h2 className="text-2xl font-bold text-slate-900">
        Contact Agent
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Get complete property details or schedule a site visit.
      </p>

      {/* Agent */}

      <div className="mt-8 flex items-center gap-4">

        <div className="relative h-20 w-20 overflow-hidden rounded-full">

          <Image
            src={property.agent.image}
            alt={property.agent.name}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <h3 className="text-lg font-semibold">
            {property.agent.name}
          </h3>

          <p className="text-sm text-slate-500">
            Senior Property Consultant
          </p>

        </div>

      </div>

      {/* Contact Info */}

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-4">

          <Phone className="h-5 w-5 text-blue-600" />

          <span>{property.agent.phone}</span>

        </div>

        <div className="flex items-center gap-4">

          <Mail className="h-5 w-5 text-blue-600" />

          <span>{property.agent.email}</span>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-8 space-y-4">

        <a
          href={`tel:${property.agent.phone}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Phone size={18} />

          Call Now
        </a>

        <a
          href={`https://wa.me/${property.agent.phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-600 px-5 py-3 font-semibold text-green-600 transition hover:bg-green-600 hover:text-white"
        >
          <MessageCircle size={18} />

          WhatsApp
        </a>

      </div>

      {/* Divider */}

      <div className="my-8 border-t" />

      {/* Quick Enquiry */}

      <h3 className="mb-5 text-lg font-semibold">
        Send Enquiry
      </h3>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        <textarea
          rows={4}
          placeholder="I'm interested in this property."
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-black"
        >
          <UserRound size={18} />

          Send Enquiry
        </button>

      </form>

    </div>
  );
}