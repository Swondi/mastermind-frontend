import { GraphPreviewCard } from "@/components/monitoring/graphs/graph-preview-card";

export function DashboardPage() {
  return (
    <div className="p-5 bg-zinc-100 w-full overflow-hidden">
      <GraphPreviewCard />
    </div>
  );
}