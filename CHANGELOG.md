# css-preflight

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
  import 'css-preflight'; // styles/preflight.css
  import 'css-preflight/preflight'; // ALIAS: styles/preflight.css
  import 'css-preflight/enhancements'; // styles/enhancements.css
  import 'css-preflight/rem-same-px'; // styles/rem-same-px
  ```
