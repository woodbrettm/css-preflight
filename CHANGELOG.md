# css-preflight

## 2.0.0

### Changes

#### `.css` Extension

Add the `.css` extension to any named imports.

```javascript
// Bare import stays the same
import "css-preflight";

// Named imports need .css extension now
import "css-preflight/preflight.css";
import "css-preflight/rem-same-px.css";
// etc
```

#### Fonts

The default fonts have been removed from the main preflight in exchange for optional imports.
For most, the only needed changed would be adding the following import, which sets a default
font stack for html elements using mono fonts.

```javascript
import "css-preflight/mono-elements.css";
```

#### Enhancements Export Deleted

The following option has been deleted:

```javascript
import "css-preflight/enhancements";
```

And replaced with:

```javascript
import "css-preflight/text-wrap-balance.css";
```

The enhancements file only had a text-wrap balance rule in it, and was removed in favor of
separate files for each optional import.

#### Vendor Prefixes Re-Added

Vendor prefixes like `-webkit-text-decoration` have been re-added that were present in the
original Tailwind preflight. This may have implications for any auto prefix tooling.

## 1.1.1

### Patch Changes

- 0b74cf2: Readme Fixes

## 1.1.0

### Minor Changes

- 7c90d68: Separate out smooth scrolling into its own import

## 1.0.1

### Patch Changes

- 20afb83: Internal updates to stylelint, github actions, and Readme.

## 1.0.0

### Major Changes

- 11372d8: This is the first major release of css-preflight.

  ### Repo Changes
  - Stylelint added.
  - Automated deployments and versioning using changesets and github actions.
  - Build system removed and source css files directly exposed instead of dist.

  ### CSS Changes
  - Browser prefixes have been removed (e.g. -webkit-, -moz-), with the intent for consumers
    of this package to use `autoprefixer` in their own build process.

  - As the source css files are exposed directly to the package.json exports, the code is
    unminifed. Was not minified previously, just noting as an FYI here.

  - font-family properties using system-ui fonts have been changed to using either web-safe fonts
    or removed entirely. system-ui fonts can be unpredictable given they depend not only on the OS
    version, but also the OS language. Removed in favor of the dev adding these intentionally
    on their own if desired.

  - `import 'css-preflight'` now only imports the reset/normalizer preflight, not the enhancements.

  Possible imports are now as follows:

  ```javascript
  import "css-preflight"; // styles/preflight.css
  import "css-preflight/preflight"; // ALIAS: styles/preflight.css
  import "css-preflight/enhancements"; // styles/enhancements.css
  import "css-preflight/rem-same-px"; // styles/rem-same-px
  ```
