#!/usr/bin/env node

import process from 'node:process';
import { consola } from 'consola';

import { FILE_MAPS } from './scripts.const.ts';
import { FILE_MAPS_DIR } from './scripts.const.ts';
import { delOutputtedFiles } from './meta.utils.ts';
import { resolveFileMaps } from './meta.utils.ts';

/*
  Deletes the README, LICENSE, and LICENSE_TAILWIND
  files in the `./package` folder.
*/

main();

export async function main()
{
  consola.start('Deleting Files...');

  try {

    const resolvedFileMaps = (
      resolveFileMaps(FILE_MAPS, FILE_MAPS_DIR)
    );

    await delOutputtedFiles(resolvedFileMaps);

    consola.success('Completed');

  } catch(error) {
    consola.error(error);
    process.exitCode = 1;
  }
}
