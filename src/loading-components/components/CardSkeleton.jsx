/**
 * CardSkeleton
 * Placeholder for a media card: image block plus two text lines.
 */
export default function CardSkeleton() {
  return (
    <div className="w-full max-w-xs space-y-3 rounded-xl border border-slate-700/60 bg-slate-800/40 p-4">
      <div className="h-24 w-full animate-pulse rounded-lg bg-slate-700/60" />
      <div className="h-3 w-3/4 animate-pulse rounded bg-slate-700/60 [animation-delay:100ms]" />
      <div className="h-3 w-1/2 animate-pulse rounded bg-slate-700/60 [animation-delay:200ms]" />
    </div>
  );
}
