# CSS Preflight

[![npm](https://img.shields.io/npm/v/css-preflight?color=red)](https://www.npmjs.com/package/css-preflight)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/woodbrettm/css-preflight/blob/main/LICENSE.md)

This is a CSS browser reset based on Tailwind's preflight, optimized for non-Tailwind projects. **Optional** enhancements like smooth scrolling and other utilities are also provided (see usage).

## Preflight

The following adjustments have been made to Tailwind's preflight, located in `styles/preflight.css`:

1. Tailwind-specific CSS variables removed.
2. Tailwind postcss functions like `theme()` removed.
3. Properties with vendor prefixes (e.g. `-webkit-`, `-moz-`) have been removed, to avoid duplication
   from autoprefixer when used. Inline comments in the `preflight.css` source code indicate which of
   these have been adjusted and note the original existing prefix.
4. system-ui fonts have been removed completely from `font-family` properties in exchange for
   either websafe fonts (e.g. Courier New for monospace elements), or removed completely (in the case
   of the original preflight's font-family on `:root`).

#### Removing System UI Fonts

system-ui fonts can be problematic as they not only depend on the OS version, but on the language
settings of the OS as well. These have been removed as it's felt they're too unpredictable to be
left in as a preflight, and better left for a dev to intentionally specify them.

## Installation

```bash
#pnpm
pnpm add css-preflight

#npm
npm install css-preflight
```

## Usage

The exports are broken down into 3 main CSS files. Completely
unprocessed so it's up to the dev to pass them through optimizations like
Autoprefixer and minification.

Simply import these into the root layout file (like `Layout.astro` for example).
They should be imported first before any other CSS imports.

#### Possible Imports

```javascript
import 'css-preflight'; // styles/preflight.css
import 'css-preflight/preflight'; // ALIAS: styles/preflight.css

import 'css-preflight/enhancements'; // styles/enhancements.css

import 'css-preflight/rem-same-px'; // styles/rem-same-px.css
```

#### Typical Setup

```javascript
import 'css-preflight/preflight';
import 'css-preflight/enhancements';
```

### Preflight

Tailwind preflight (with adjustments mentioned previously). Can either do a bare
`css-preflight` import, or use the more verbose option of `css-preflight/preflight`.
Both are exactly the same.

### Enhancements

These are small enhancements added to the main preflight:

- Enables smooth scrolling to anchor points (e.g. #about). Disabled for `prefers-reduced-motion`.
- Adds `text-wrap: balance` on h1-h6 and blockquote. Helps prevent hanging words on newlines.

### Rem Same Px

Sets rem equal to 1px at the root for easier design-dev handoff. This calculation is done
using `%`, so the browser root font size will still affect fonts using `rem` for
accessibility purposes.

### License

The repo falls under MIT licensing, contained in the LICENSE.md file.
Usage of the `preflight.css` file is also subject to Tailwind's licensing (MIT), which is included
in the repo for reference.
