---
"css-preflight": minor
---

Add `preflight-fonts.css` export and some small css tweaks.

In previous versions of css preflight, all fonts were stripped from the Tailwind preflight: `preflight.css`, and there was no way to reintroduce them back into the preflight.

This is now possible with the `preflight-fonts.css` export. As a result, there's now a faster way to get started. Combined, these two imports cover all major aspects of the original Tailwind preflight.

```javascript
import 'css-preflight/preflight.css';
import 'css-preflight/preflight-fonts.css';
```
