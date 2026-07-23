import PropertyTable from "./components/PropertyTable";
import PropertyToolbar from "./components/PropertyToolbar";

export default function PropertiesPage() {
  return (
    <div className="space-y-6">

      <PropertyToolbar />

      <PropertyTable />

    </div>
  );
}