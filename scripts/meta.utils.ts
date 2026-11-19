import type { FileMap } from './scripts.types.ts';
import type { ResolvedFileMap } from './scripts.types.ts';
import type { AbsoluteFilePath } from './scripts.types.ts';

import path from 'node:path';
import { copyFile } from 'node:fs/promises';
import { rm } from 'node:fs/promises';

/*
  Utils specific for the use of working with
  the file maps defined in scripts.const.ts
  and any meta: prefixed script files.
*/

export function resolveFileMaps
(fileMaps: FileMap[], resolveRelativeTo: string)
: ResolvedFileMap[]
{
  const resolver = (m: FileMap) => resolveFileMap(m, resolveRelativeTo);
  const resolvedFileMaps = fileMaps.map(resolver);

  if (fileMaps.length !== resolvedFileMaps.length) {

    throw new Error(
      `fileMaps length: ${fileMaps.length}, not matching ` +
      `resolvedFileMaps length: ${resolvedFileMaps.length}.`
    );
  }
  return resolvedFileMaps;
}

export function resolveFileMap
(fileMap: FileMap, resolveRelativeTo: string)
: ResolvedFileMap
{
  const relTo = resolveRelativeTo;
  const { from, to } = fileMap;

  const fromResolved = resolveFilePath(relTo, from);
  const toResolved = resolveFilePath(relTo, to);

  const resolvedMapping: ResolvedFileMap = {
    from: fromResolved,
    to: toResolved,
  };

  return resolvedMapping;
}

export function resolveFilePath
(resolveRelativeTo: string, filePath: string)
: AbsoluteFilePath
{
  const resolvedPath = path.resolve(resolveRelativeTo, filePath);
  assertFilePathAbsolute(resolvedPath);
  return resolvedPath;
}

export function assertFilePathAbsolute
(filePath: string)
: asserts filePath is AbsoluteFilePath
{
  if (!path.isAbsolute(filePath)) {
    throw new Error(`path: ${filePath} is not absolute.`);
  }
}

export async function copyFiles
(fileMaps: ResolvedFileMap[])
: Promise<void>
{
  const promises = fileMaps.map(fileMapCopy);
  await Promise.all(promises);
}

export async function fileMapCopy
(fileMap: ResolvedFileMap)
: Promise<void>
{
  /** 0 means yes, overwrite  */
  const overwriteExisting = 0;
  return (
    copyFile(
      fileMap.from,
      fileMap.to,
      overwriteExisting,
    )
  );
}

export async function delOutputtedFiles
(fileMaps: ResolvedFileMap[])
: Promise<void>
{
  const promises = fileMaps.map(
    (m) => rm(m.to, { force: true }),
  );
  await Promise.all(promises);
}
