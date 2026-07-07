# Loading Components

A collection of 15 standalone, prop-free loading animations built with
**React**, **Tailwind CSS**, **Framer Motion**, and **lucide-react** — plus
an interactive gallery to preview and trigger every one of them.

**[Live Demo →](#)** &nbsp;·&nbsp; **[GIF/Screenshot →](#)**

<!--
  Replace the links above once deployed, and drop a short screen recording
  or GIF here (e.g. via Kap, ScreenToGif, or Peek) showing the gallery in action.
-->

---

## Why

Most "loading spinner" libraries give you one `<Loader />` component with a
dozen props (`type`, `variant`, `size`...). This repo takes the opposite
approach: **every animation is its own small, self-contained component.**
No prop drilling, no config objects — just import the one you need.

## Install

```bash
npm install framer-motion lucide-react
```

Tailwind CSS must already be configured in your project. No changes to
`tailwind.config.js` are required — every animation uses either Tailwind's
built-in `animate-pulse` utility, Tailwind arbitrary properties
(`[animation-delay:150ms]`), or Framer Motion directly.

## Usage

Every component has a default export and takes **zero props** — import and
render it:

```jsx
import SpinnerLoader from "./components/SpinnerLoader";

function MyPage() {
  return <SpinnerLoader />;
}
```

## Components

| Component | Use case |
|---|---|
| `SpinnerLoader` | Classic rotating ring — inline / small-area loading |
| `DotLoader` | Three dots bouncing in sequence — chat "typing" states |
| `PulseLoader` | Expanding pulse ring — subtle background activity |
| `BounceLoader` | Bouncing ball with squash-and-stretch — playful contexts |
| `SkeletonLoader` | Staggered text-line placeholders — paragraph content |
| `ProgressLoader` | Sliding indeterminate bar — unknown-duration tasks |
| `ShimmerLoader` | Light sweep across a block — image/media placeholders |
| `CardSkeleton` | Image + text card placeholder — feeds, grids |
| `TableSkeleton` | Row-based placeholder — data tables |
| `ListSkeleton` | Bulleted/feed placeholder — sidebars, activity lists |
| `DashboardSkeleton` | Widget grid placeholder — dashboards |
| `ProfileSkeleton` | Avatar + text placeholder — user cards, headers |
| `FullScreenLoader` | Full-viewport blocking overlay — route transitions, app boot |
| `ButtonLoader` | Disabled button with inline spinner — form submission |
| `PageLoader` | Top-of-page progress bar — NProgress-style page loads |

## Gallery demo

`LoadingGallery.jsx` renders every component inside its own card. Click a
card to run its animation for 3 seconds (click again to replay), or use
**Run All** / **Stop All** to control every loader at once. Each card
manages its own state independently.

```jsx
import LoadingGallery from "./LoadingGallery";

export default function App() {
  return <LoadingGallery />;
}
```

## Notes

- `FullScreenLoader` uses `fixed inset-0`, so when active it intentionally
  overlays the entire viewport — that's the real behavior you'd get using
  it in an app.
- All components use standard Tailwind color utilities (`slate`, `cyan`,
  `amber`, `emerald`), so they drop into any existing theme without extra
  configuration.

## Stack

React · Tailwind CSS · Framer Motion · lucide-react

## License

MIT — use freely in personal or commercial projects.
