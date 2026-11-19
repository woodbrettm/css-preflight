import type { AbsoluteFilePath } from '../scripts/scripts.types.ts';
import type { FileMap } from '../scripts/scripts.types.ts';
import type { ResolvedFileMap } from '../scripts/scripts.types.ts';

import assert from 'node:assert/strict';
import path from 'node:path';

import { before } from 'node:test';
import { describe } from 'node:test';
import { it } from 'node:test';
import { suite } from 'node:test';

import * as CMUtils from '../scripts/meta.utils.ts';

suite('unit:meta.utils', () => {

  let dirName!: string;
  let fileMap!: FileMap;
  let fileMaps!: FileMap[];
  let resolvedFileMap!: ResolvedFileMap;
  let resolvedFileMaps!: ResolvedFileMap[];

  before(() => {

    dirName = import.meta.dirname;

    fileMap = {
      from: '../package.json',
      to: './package.json',
    };
    fileMaps = [fileMap];

    resolvedFileMap = {
      from: path.resolve(dirName, fileMap.from) as AbsoluteFilePath,
      to: path.resolve(dirName, fileMap.to) as AbsoluteFilePath,
    };
    resolvedFileMaps = [resolvedFileMap];

  });

  describe('assertFilePathAbsolute()', () => {

    it('does nothing if an absolute path', () => {
      assert.doesNotThrow(
        () => CMUtils.assertFilePathAbsolute(resolvedFileMap.from),
      );
    });

    it('throws an error if not an absolute path', () => {
      assert.throws(
        () => CMUtils.assertFilePathAbsolute(fileMap.from),
      );
    });
  });

  describe('resolveFilePath()', () => {

    it('correctly resolves a filepath', () => {
      assert.equal(
        CMUtils.resolveFilePath(dirName, fileMap.from),
        resolvedFileMap.from,
      );
    });
  });

  describe('resolveFileMaps()', () => {

    it('correctly resolves a fileMap', () => {
      assert.deepStrictEqual(
        CMUtils.resolveFileMaps(fileMaps, dirName),
        resolvedFileMaps,
      );
    });
  });
});
