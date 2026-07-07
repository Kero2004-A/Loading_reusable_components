/**
 * SkeletonLoader
 * Staggered placeholder lines for standalone text content.
 */
export default function SkeletonLoader() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="h-3 w-3/4 animate-pulse rounded bg-slate-700/60" />
      <div className="h-3 w-full animate-pulse rounded bg-slate-700/60 [animation-delay:150ms]" />
      <div className="h-3 w-5/6 animate-pulse rounded bg-slate-700/60 [animation-delay:300ms]" />
    </div>
  );
}
