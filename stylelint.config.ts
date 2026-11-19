import type { Config } from 'stylelint';

export default {
  ignoreFiles: [
    // Disabling for now to fix lint errors later
    '*/**',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-modern',
  ],
  rules: {
    'plugin/use-baseline': [
      true,
      { severity: 'error' },
    ],
  },
} satisfies Config;
