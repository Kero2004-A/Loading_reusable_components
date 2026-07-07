/**
 * ProfileSkeleton
 * Placeholder for a user profile row: avatar plus name and subtitle lines.
 */
export default function ProfileSkeleton() {
  return (
    <div className="flex w-full max-w-xs items-center gap-3">
      <div className="h-12 w-12 shrink-0 animate-pulse rounded-full bg-slate-700/60" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-2/3 animate-pulse rounded bg-slate-700/60" />
        <div className="h-3 w-1/3 animate-pulse rounded bg-slate-700/60 [animation-delay:150ms]" />
      </div>
    </div>
  );
}
