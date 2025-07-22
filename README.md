# CSS Preflight

This is a CSS browser reset based on Tailwind's preflight, optimized for
non-Tailwind projects. Optional enhancements like smooth scrolling and
other utilities are also provided.

## Differences to Tailwind's Preflight

The following adjustments have been made to the preflight:

1. Tailwind-specific CSS variables and styling removed.
2. Two Tailwind `font-family` defaults have been removed from the
   preflight in favor of optional imports. One was setting the
   default font stack for the overall HTML document, and the other
   was setting monospace fonts for HTML elements like `code`.

#### Why Font Family Defaults Removed

Font stacks are a rapidly evolving space at the moment, and the use of
system fonts is becoming more common, such as in Tailwind's
preflight. However, the use of `system-ui` and similar values for the `font-family`
property can be problematic. They not only depend on the OS version,
but on the language settings of the OS as well, which can be unpredictable,
according to the following article: https://infinnie.github.io/blog/2017/systemui.html.

Granted, this is an older article, but as a precaution, `font-family` defaults
have been moved to optional imports with possible system fonts being manually
specified over the usage of `system-ui`, `monospace-ui`, etc.

## Installation

```bash
#pnpm
pnpm add css-preflight

#npm
npm install css-preflight
```

## Typical Usage

Note this setup doesn't contain any defaults for the main font. Those are
available as optional imports.

```javascript
// main preflight
// import "css-preflight" does the same.
import "css-preflight/preflight.css";

// Sets default fonts for html elements that use monospace fonts
// Unnecessary to use this if wanting to set your own monospace fonts
import "css-preflight/mono-elements.css";
```

For fastest performance, it's recommended to have the CSS directly
injected into the HTML as a `<style>` tag, along with any other critical
CSS applying to above-the-fold content. Avoid putting the `<style>` tag
inside `<head>` as invalid CSS can break processing of other elements
inside `<head>`.

```html
<head></head>
<body>
  <style>
    <!-- Inject here -->
  </style>
  <!-- Rest of html -->
</body>
```

Reminder to set emoji font fallbacks when defining your own
font stacks:

```css
:root,
:host {
  font-family:
    /* Your fonts here */
    sans-serif, /* or serif, monospace, etc. */
    /* then do: */
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}
```

## Package Exports

### Main Preflight

The main Tailwind-derived CSS reset.

#### Bare Import

```javascript
import "css-preflight"; // styles/preflight.css
```

#### Named Import

```javascript
import "css-preflight/preflight.css"; // styles/preflight.css
```

### Default Main Fonts

Sets a default main font for the document (body text, headings, etc.) Only applies these
to `:root` and `:host`, to be inherited by other elements. Useful in development when
no main font has been chosen for the design yet, or for simple testing purposes.

#### Mono

```javascript
import "css-preflight/font-mono.css";
```

#### Sans Serif

```javascript
import "css-preflight/font-sans-serif.css";
```

#### Serif

```javascript
import "css-preflight/font-serif.css";
```

### Mono Elements

Sets a default monospace font stack for the `code`, `kbd`, `samp`, and `pre`
HTML elements. Many design and branding systems don't include
monospace font guidelines so this option can be useful for those cases.

```javascript
import "css-preflight/mono-elements.css";
```

### Rem Same Px

Sets `1 rem = 1px` at the root for easier design-dev hand-off. This calculation
is done using `%`, so if the user adjusts the browser font sizes, those will
still affect the page for accessibility purposes. Note this may affect
framework error debug message pages in development (e.g. Nuxt, Next, Astro, etc.).

```javascript
import "css-preflight/rem-same-px.css"; // styles/rem-same-px.css
```

### Smooth Scroll

Enables smooth scrolling to anchor points (e.g. #about). Disabled for `prefers-reduced-motion`.

```javascript
import "css-preflight/smooth-scroll.css"; // styles/smooth-scroll.css
```

### Text Wrap Balance

Adds `text-wrap: balance` on h1-h6 and blockquote. Helps prevent single hanging words on
heading newlines.

```javascript
import "css-preflight/text-wrap-balance.css"; // styles/text-wrap-balance.css
```

## License

The repo falls under MIT licensing, contained in the LICENSE.md file.
Usage of the `preflight.css` file is also subject to Tailwind's licensing (MIT), which is included
in the repo for reference.
