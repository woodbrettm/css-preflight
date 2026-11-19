import type { FileMap } from './scripts.types.ts';

export const FILE_MAPS = [
  { from: '../README.md', to: '../package/README.md' },
  { from: '../LICENSE.md', to: '../package/LICENSE.md' },
  { from: '../LICENSE_TAILWIND.md', to: '../package/LICENSE_TAILWIND.md' },
] as const satisfies FileMap[];

export const FILE_MAPS_DIR = import.meta.dirname;
