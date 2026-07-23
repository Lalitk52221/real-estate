import EnquiryTable from "./components/EnquiryTable";
import EnquiryToolbar from "./components/EnquiryToolbar";

export default function EnquiriesPage() {
  return (
    <div className="space-y-6">
      <EnquiryToolbar />
      <EnquiryTable />
    </div>
  );
}