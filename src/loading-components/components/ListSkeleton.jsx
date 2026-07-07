/**
 * ListSkeleton
 * Placeholder for a bulleted or feed-style list.
 */
export default function ListSkeleton() {
  const items = Array.from({ length: 3 });
  return (
    <ul className="w-full max-w-xs space-y-3">
      {items.map((_, i) => (
        <li key={i} className="flex items-center gap-3">
          <div
            className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-cyan-400/70"
            style={{ animationDelay: `${i * 120}ms` }}
          />
          <div
            className="h-3 flex-1 animate-pulse rounded bg-slate-700/60"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        </li>
      ))}
    </ul>
  );
}
