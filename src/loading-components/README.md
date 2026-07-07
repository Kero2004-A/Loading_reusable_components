# Loading Components

A collection of 15 standalone, prop-free loading animations built with React,
Tailwind CSS, Framer Motion, and lucide-react — plus a `LoadingGallery` demo
page to preview all of them.

## Install dependencies

```bash
npm install framer-motion lucide-react
```

Tailwind CSS must already be configured in your project. No changes to
`tailwind.config.js` are required — every animation uses either Tailwind's
built-in `animate-pulse` utility, Tailwind arbitrary properties
(`[animation-delay:150ms]`), or Framer Motion.

## Components

| File | Description |
|---|---|
| `components/SpinnerLoader.jsx` | Classic rotating ring |
| `components/DotLoader.jsx` | Three dots bouncing in sequence |
| `components/PulseLoader.jsx` | Expanding pulse ring around a solid core |
| `components/BounceLoader.jsx` | Bouncing ball with squash-and-stretch shadow |
| `components/SkeletonLoader.jsx` | Staggered placeholder text lines |
| `components/ProgressLoader.jsx` | Sliding indeterminate progress bar |
| `components/ShimmerLoader.jsx` | Light sweep across a placeholder block |
| `components/CardSkeleton.jsx` | Image + text card placeholder |
| `components/TableSkeleton.jsx` | Row-based table placeholder |
| `components/ListSkeleton.jsx` | Bulleted / feed list placeholder |
| `components/DashboardSkeleton.jsx` | Dashboard widget grid placeholder |
| `components/ProfileSkeleton.jsx` | Avatar + text profile placeholder |
| `components/FullScreenLoader.jsx` | Full-viewport blocking overlay loader |
| `components/ButtonLoader.jsx` | Disabled button with inline spinner |
| `components/PageLoader.jsx` | Top-of-page indeterminate progress bar |

Each file has a default export and takes **no props** — import and render
directly:

```jsx
import SpinnerLoader from "./components/SpinnerLoader";

function MyPage() {
  return <SpinnerLoader />;
}
```

## Demo gallery

`LoadingGallery.jsx` renders every component inside a card. Click a card to
run its animation for 3 seconds (click again to replay), or use the
**Run All** / **Stop All** buttons to control every loader at once. Each
card manages its own state independently.

```jsx
import LoadingGallery from "./LoadingGallery";

export default function App() {
  return <LoadingGallery />;
}
```

## Notes

- `FullScreenLoader` uses `fixed inset-0`, so when active inside the gallery
  it intentionally overlays the entire viewport — that's the real behavior
  you'd get using it in an app (e.g. during route transitions or app boot).
- All components use standard Tailwind color utilities (`slate`, `cyan`,
  `amber`, `emerald`) so they drop into any existing theme without
  configuration changes.
