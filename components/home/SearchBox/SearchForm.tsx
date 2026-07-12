import { MapPin, Home, IndianRupee, Search } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SearchForm() {
  return (
    <div className="mt-6 grid w-full gap-4 rounded-3xl bg-white p-6 shadow-2xl md:grid-cols-4">

      <div className="flex items-center gap-3 rounded-xl border p-4">
        <MapPin className="text-blue-600" />
        <input
          type="text"
          placeholder="Location"
          className="w-full outline-none"
        />
      </div>

      <div className="flex items-center gap-3 rounded-xl border p-4">
        <Home className="text-blue-600" />
        <select className="w-full outline-none">
          <option>Property Type</option>
          <option>Plot</option>
          <option>House</option>
          <option>Flat</option>
        </select>
      </div>

      <div className="flex items-center gap-3 rounded-xl border p-4">
        <IndianRupee className="text-blue-600" />
        <select className="w-full outline-none">
          <option>Budget</option>
          <option>10 Lakh</option>
          <option>25 Lakh</option>
          <option>50 Lakh</option>
          <option>1 Crore+</option>
        </select>
      </div>

      <Button className="h-full">
        <Search size={18} />
        <span className="ml-2">Search</span>
      </Button>

    </div>
  );
}