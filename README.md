# CSS Preflight

This is a CSS browser normalizer based on Tailwind's preflight,
with additional enhancements like smooth scrolling. The original
preflight has several Tailwind-isms like tailwind-specific css variables,
and usage of the tailwind `theme()` function, which have been removed.

## Core Usage:

The package `main:` links to a bundled `core.css` file, so simply import the package into
the root project layout file, such as into `Layout.astro` for example. The core contains
tailwind's preflight with additional enhancements.

Note: the css is not minified.

```javascript
import 'css-preflight'; // imports core
```

## Utilities

The package also comes with utilities:

### `rem-same-px`

Sets rem equal to 1px at the root, so they can be used interchangeably.
This calculation is done using `%`, so the browser root font size
will still affect using `rem` for accessibility purposes.

```javascript
import 'css-preflight/rem-same-px';
```

### License

The repo falls under MIT licensing, contained in the LICENSE.md file.
Usage is also subject to Tailwind's licensing (MIT), which is included
in the repo for reference (LICENSE_TAILWIND).
