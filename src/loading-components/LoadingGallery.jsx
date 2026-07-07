import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Square } from "lucide-react";

import SpinnerLoader from "./components/SpinnerLoader";
import DotLoader from "./components/DotLoader";
import PulseLoader from "./components/PulseLoader";
import BounceLoader from "./components/BounceLoader";
import SkeletonLoader from "./components/SkeletonLoader";
import ProgressLoader from "./components/ProgressLoader";
import ShimmerLoader from "./components/ShimmerLoader";
import CardSkeleton from "./components/CardSkeleton";
import TableSkeleton from "./components/TableSkeleton";
import ListSkeleton from "./components/ListSkeleton";
import DashboardSkeleton from "./components/DashboardSkeleton";
import ProfileSkeleton from "./components/ProfileSkeleton";
import FullScreenLoader from "./components/FullScreenLoader";
import ButtonLoader from "./components/ButtonLoader";
import PageLoader from "./components/PageLoader";

const RUN_DURATION = 3000;

const LOADERS = [
  { id: "spinner", code: "LDR-01", name: "Spinner Loader", description: "Classic rotating ring for inline loading states.", Component: SpinnerLoader },
  { id: "dot", code: "LDR-02", name: "Dot Loader", description: "Three dots bouncing in a staggered sequence.", Component: DotLoader },
  { id: "pulse", code: "LDR-03", name: "Pulse Loader", description: "Expanding pulse ring around a solid core.", Component: PulseLoader },
  { id: "bounce", code: "LDR-04", name: "Bounce Loader", description: "A ball bouncing with a squash-and-stretch shadow.", Component: BounceLoader },
  { id: "skeleton", code: "LDR-05", name: "Skeleton Loader", description: "Staggered placeholder lines for text content.", Component: SkeletonLoader },
  { id: "progress", code: "LDR-06", name: "Progress Loader", description: "Indeterminate sliding progress bar.", Component: ProgressLoader },
  { id: "shimmer", code: "LDR-07", name: "Shimmer Loader", description: "Light sweep travelling across a placeholder block.", Component: ShimmerLoader },
  { id: "cardSkeleton", code: "LDR-08", name: "Card Skeleton", description: "Placeholder for an image-and-text card.", Component: CardSkeleton },
  { id: "tableSkeleton", code: "LDR-09", name: "Table Skeleton", description: "Row-based placeholder for tabular data.", Component: TableSkeleton },
  { id: "listSkeleton", code: "LDR-10", name: "List Skeleton", description: "Placeholder for a bulleted or feed list.", Component: ListSkeleton },
  { id: "dashboardSkeleton", code: "LDR-11", name: "Dashboard Skeleton", description: "Placeholder grid for dashboard widgets.", Component: DashboardSkeleton },
  { id: "profileSkeleton", code: "LDR-12", name: "Profile Skeleton", description: "Avatar-and-text placeholder for profiles.", Component: ProfileSkeleton },
  { id: "fullScreen", code: "LDR-13", name: "Full Screen Loader", description: "Full-viewport overlay loader with a status message.", Component: FullScreenLoader },
  { id: "button", code: "LDR-14", name: "Button Loader", description: "Disabled button with an inline spinner.", Component: ButtonLoader },
  { id: "page", code: "LDR-15", name: "Page Loader", description: "Top-of-page indeterminate progress bar.", Component: PageLoader },
];

function LoaderCard({ code, name, description, Component, active, onActivate }) {
  return (
    <motion.button
      type="button"
      onClick={onActivate}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex flex-col gap-4 rounded-2xl border p-5 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
        active
          ? "border-cyan-400/50 bg-slate-800/70 shadow-[0_0_0_1px_rgba(94,234,212,0.15),0_20px_45px_-22px_rgba(94,234,212,0.4)]"
          : "border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/50"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-widest text-slate-500">{code}</span>
        <span className="flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              active ? "bg-cyan-400" : "bg-slate-700"
            }`}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            {active ? "running" : "idle"}
          </span>
        </span>
      </div>

      <div className="flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-950/50 px-4">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key="active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex w-full items-center justify-center"
            >
              <Component />
            </motion.div>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-slate-600"
            >
              Click to run
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-100">{name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">{description}</p>
      </div>
    </motion.button>
  );
}

export default function LoadingGallery() {
  const [activeIds, setActiveIds] = useState(() => new Set());
  const timeoutsRef = useRef({});

  const clearTimeoutFor = (id) => {
    if (timeoutsRef.current[id]) {
      clearTimeout(timeoutsRef.current[id]);
      delete timeoutsRef.current[id];
    }
  };

  const activate = useCallback((id) => {
    clearTimeoutFor(id);
    setActiveIds((prev) => new Set(prev).add(id));
    timeoutsRef.current[id] = setTimeout(() => {
      setActiveIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      delete timeoutsRef.current[id];
    }, RUN_DURATION);
  }, []);

  const runAll = useCallback(() => {
    LOADERS.forEach((loader) => activate(loader.id));
  }, [activate]);

  const stopAll = useCallback(() => {
    Object.values(timeoutsRef.current).forEach(clearTimeout);
    timeoutsRef.current = {};
    setActiveIds(new Set());
  }, []);

  const runningCount = activeIds.size;

  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.08)_1px,transparent_0)] bg-[size:24px_24px] px-6 py-14 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-slate-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">
              System Status · Loaders
            </span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Loading Components
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              Fifteen standalone, drop-in loading animations. Click any card to run its
              animation for three seconds, or trigger the whole panel at once.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden font-mono text-xs text-slate-500 sm:inline">
              {runningCount > 0 ? `${runningCount} running` : "all idle"}
            </span>
            <button
              type="button"
              onClick={runAll}
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition-all duration-200 hover:bg-cyan-300 active:scale-95"
            >
              <Play className="h-4 w-4" />
              Run All
            </button>
            <button
              type="button"
              onClick={stopAll}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800 active:scale-95"
            >
              <Square className="h-3.5 w-3.5" />
              Stop All
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LOADERS.map((loader) => (
            <LoaderCard
              key={loader.id}
              code={loader.code}
              name={loader.name}
              description={loader.description}
              Component={loader.Component}
              active={activeIds.has(loader.id)}
              onActivate={() => activate(loader.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
