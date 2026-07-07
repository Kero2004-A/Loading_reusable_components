/**
 * DashboardSkeleton
 * Placeholder grid for a dashboard: one wide widget plus two smaller ones.
 */
export default function DashboardSkeleton() {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-2">
      <div className="col-span-2 h-14 animate-pulse rounded-lg bg-slate-700/60" />
      <div className="h-12 animate-pulse rounded-lg bg-slate-700/60 [animation-delay:100ms]" />
      <div className="h-12 animate-pulse rounded-lg bg-slate-700/60 [animation-delay:200ms]" />
    </div>
  );
}
