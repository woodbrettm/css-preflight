# 🌲 CSS Preflight

[![NPM: css-preflight][npm-badge]][npm-package]
[![Github: css-preflight][gh-badge]][gh-package]
[![NPM Tag: CSS Reset][tag-1-badge]][tag-1-npm]
[![NPM Tag: Normalize CSS][tag-2-badge]][tag-2-npm]
[![NPM Tag: Modern CSS][tag-3-badge]][tag-3-npm]
[![NPM Tag: Vanilla CSS][tag-4-badge]][tag-4-npm]

[npm-badge]: https://img.shields.io/badge/NPM-css--preflight-%23732A2A
[npm-package]: https://www.npmjs.com/package/css-preflight
[gh-badge]: https://img.shields.io/badge/Github-woodbrettm/css--preflight-%23205069
[gh-package]: https://github.com/woodbrettm/css-preflight
[tag-1-badge]: https://img.shields.io/badge/CSS_Reset-%2354413E
[tag-1-npm]: https://www.npmjs.com/search?q=keywords:css-reset
[tag-2-badge]: https://img.shields.io/badge/Normalize_CSS-%2354413E
[tag-2-npm]: https://www.npmjs.com/search?q=keywords:normalize-css
[tag-3-badge]: https://img.shields.io/badge/Modern_CSS-%2354413E
[tag-3-npm]: https://www.npmjs.com/search?q=keywords:modern-css
[tag-4-badge]: https://img.shields.io/badge/Vanilla_CSS-%2354413E
[tag-4-npm]: https://www.npmjs.com/search?q=keywords:vanilla-css

CSS Preflight is a CSS reset that normalizes default styling across major browsers, based on [Tailwind's preflight][tailwind-preflight] and adapted for non-Tailwind projects. Enhancements like smooth scrolling and other utilities are also provided.

**`💡 Why Tailwind?:`** Their preflight is consistently maintained and used by a large audience, making it a reliable foundation to build on for vanilla css projects.

[tailwind-preflight]: https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/preflight.css

## Installation

```bash
# npm
npm install css-preflight

# pnpm
pnpm add css-preflight

# yarn
yarn add css-preflight
```

> ⚠️ It's recommended to pin `css-preflight` to an exact version or minor release. While small changes synced from Tailwind's preflight are released as minor version changes, there may be side effects this package can't account for given the global nature of a preflight.

**`🏗️ Quick Setup:`** For the TL;DR version, add these imports to your layout or root app file. This matches closest to the Tailwind preflight, in accordance with the **📦 [Basic Setup](#basic-setup)** guide:

```javascript
// main preflight
// alias: import 'css-preflight'
import 'css-preflight/preflight.css';

// tailwind-specific fonts
import 'css-preflight/preflight-fonts.css';
```

## Package Details

The package is broken down into 4 groups:

**📦 [Basic Setup:](#basic-setup)** Fastest way to get started, matching the Tailwind preflight the closest.

**🛠️ [Customized Setup:](#customized-setup)** Allows for customization on which default font stacks to use.

**❄️ [Minimal Setup:](#minimal-setup)** Base Tailwind preflight only. No default fonts are provided.

**✨ [Enhancements:](#enhancements)** Imports that add enhancements beyond the preflight and font stacks.

### The Main Preflight

The core preflight with Tailwind-specifics stripped from the stylesheet:

```javascript
// alias: import 'css-preflight'
import 'css-preflight/preflight.css';
```

> 💡 For the sake of possible customization, all fonts were stripped from the Tailwind preflight when drafting the `preflight.css` file. `preflight-fonts.css` covers this if wanting to use them.

### Additional Exports

| Group / Setup                          | Export                  | Description                             |
| -------------------------------------- | ----------------------- | --------------------------------------- |
| **📦 [Basic](#basic-setup)**           | `preflight-fonts.css`   | Exact fonts from Tailwind's preflight.  |
| **🛠️ [Customized](#customized-setup)** | `font-sans-serif.css`   | Sans serif fonts for default main font. |
| **🛠️ [Customized](#customized-setup)** | `font-serif.css`        | Serif fonts for default main font.      |
| **🛠️ [Customized](#customized-setup)** | `font-mono.css`         | Mono fonts for default main font.       |
| **🛠️ [Customized](#customized-setup)** | `mono-elements.css`     | Mono fonts for specific HTML elements.  |
| **✨ [Enhancements](#enhancements)**   | `rem-same-px.css`       | 1rem = 1px + respecting accessibility.  |
| **✨ [Enhancements](#enhancements)**   | `smooth-scroll.css`     | Smooth scrolling to #anchor links.      |
| **✨ [Enhancements](#enhancements)**   | `text-wrap-balance.css` | Helps prevent single words on newlines. |

## Basic Setup

📦 Combining these imports is the fastest way to get started and match closely to the original Tailwind preflight. If wanting to skip using `preflight-fonts.css`, see the **❄️ [Minimal Setup](#minimal-setup)** for notes.

```javascript
// main preflight
// alias: import 'css-preflight'
import 'css-preflight/preflight.css';

// contains the font-family defaults for the root html
// and also mono elements like code, pre, etc.
import 'css-preflight/preflight-fonts.css';
```

## Customized Setup

🛠️ If wanting more customization over the font stack, but still wanting to use what's provided from css-preflight rather than defining completely custom font stacks. Import only one of the Customized Fonts. So max total should be 3 imports when using this setup.

```javascript
// main preflight
import 'css-preflight/preflight.css';

// Choose between these which set the default
// font on the root html element. Skip
// if defining a custom default font stack.
import 'css-preflight/font-sans-serif.css';
import 'css-preflight/font-serif.css';
import 'css-preflight/font-mono.css';

// Sets default fonts for html elements that use
// monospace text by default. Skip if defining
// a custom default font stack for these elements.
// (which are <code>, <kbd>, <samp>, and <pre>)
import 'css-preflight/mono-elements.css';
```

> 💡 The `font-*.css` and `mono-elements.css` imports use their own font stacks, partially derived from Tailwind's preflight. Additionally, they avoid the use of any system fonts, while `preflight-fonts.css` in the Basic Setup includes them to match Tailwind's preflight.

## Minimal Setup

❄️ The only import in this setup is the base preflight. Best if wanting to benefit from Tailwind's preflight CSS but prefer to define custom font stacks. Don't forget to define default fonts for the `<code>`, `<kbd>`, `<samp>`, and `<pre>` html elements.

```javascript
// Bare import
import 'css-preflight';

// Named import
import 'css-preflight/preflight.css';
```

## Enhancements

✨ Optional imports that extend the base preflight and core exports with additional features. Place these after the core imports. Authored separately from the Tailwind preflight.

### Rem Same Pixels

Sets `1 rem = 1px` at the root for easier design-dev hand-off. This calculation is done using `%`, so if the user adjusts the browser font sizes, those will still affect the page for accessibility purposes. Note this may affect framework error debug message pages in development (e.g. Nuxt, Next, Astro, etc.).

```javascript
import 'css-preflight/rem-same-px.css';
```

### Smooth Scroll

Enables smooth scrolling to anchor points (e.g. #about). Disables when `prefers-reduced-motion`.

```javascript
import 'css-preflight/smooth-scroll.css';
```

### Text Wrap Balance

Adds `text-wrap: balance` on h1-h6 and blockquote. Helps prevent single words wrapping to newlines, instead opting to wrap several to keep things visually appealing.

```javascript
import 'css-preflight/text-wrap-balance.css';
```

## License

The repo falls under MIT licensing, contained in the `LICENSE.md` file. Usage of the `preflight.css` and `preflight-fonts.css` files are also subject to Tailwind's licensing (MIT), which is included in the repo for reference in the `LICENSE_TAILWIND.md` file.
