/**
 * TableSkeleton
 * Row-based placeholder for tabular data: avatar, label, and value cells.
 */
export default function TableSkeleton() {
  const rows = Array.from({ length: 4 });
  return (
    <div className="w-full max-w-xs space-y-2.5">
      {rows.map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className="h-7 w-7 shrink-0 animate-pulse rounded-full bg-slate-700/60"
            style={{ animationDelay: `${i * 100}ms` }}
          />
          <div
            className="h-3 flex-1 animate-pulse rounded bg-slate-700/60"
            style={{ animationDelay: `${i * 100 + 50}ms` }}
          />
          <div
            className="h-3 w-10 animate-pulse rounded bg-slate-700/60"
            style={{ animationDelay: `${i * 100 + 100}ms` }}
          />
        </div>
      ))}
    </div>
  );
}
