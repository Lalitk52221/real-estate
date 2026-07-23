import CustomerToolbar from "./components/CustomerToolbar";
import CustomerTable from "./components/CustomerTable";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <CustomerToolbar />
      <CustomerTable />
    </div>
  );
}