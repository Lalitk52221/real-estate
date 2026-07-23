import AgentTable from "./components/AgentTable";
import AgentToolbar from "./components/AgentToolbar";

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <AgentToolbar />
      <AgentTable />
    </div>
  );
}