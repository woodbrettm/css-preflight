#!/usr/bin/env node

import process from 'node:process';
import { consola } from 'consola';

import { FILE_MAPS } from './scripts.const.ts';
import { FILE_MAPS_DIR } from './scripts.const.ts';
import { copyFiles } from './meta.utils.ts';
import { resolveFileMaps } from './meta.utils.ts';

/*
  Copies the README, LICENSE, and LICENSE_TAILWIND
  files to the `./package` folder so they're included
  when published to the npm registry.
*/

main();

export async function main()
{
  consola.start('Copying Files...');

  try {
    const resolvedFileMaps = (
      resolveFileMaps(FILE_MAPS, FILE_MAPS_DIR)
    );
    await copyFiles(resolvedFileMaps);

    consola.success('Completed');

  } catch(error) {
    consola.error(error);
    process.exitCode = 1;
  }

}
