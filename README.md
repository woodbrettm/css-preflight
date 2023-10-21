# CSS Preflight

This is a CSS browser normalizer based on Tailwind's preflight,
with additional enhancements like smooth scrolling.

The original preflight has several Tailwind-isms like tailwind-specific
css variables, and usage of the tailwind `theme()` function,
which have been removed.

### Usage:

The package `main:` links to a bundled `style.css` file, so simply import the package into
the root project layout file, such as into `Layout.astro` for example. The code is minified
and comments have been removed.

```javascript
import 'css-preflight';
```

### License

The repo falls under MIT licensing, contained in the LICENSE.md file.
Usage is also subject to Tailwind's licensing (MIT), which is included
in the repo for reference (LICENSE_TAILWIND).
