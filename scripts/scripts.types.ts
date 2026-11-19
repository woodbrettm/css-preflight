import type { Tagged } from 'type-fest';

export type FilePath = string;
export type AbsoluteFilePath = Tagged<string, 'Absolute File Path'>;

export type FileMap = {
  from: FilePath;
  to: FilePath;
};

export type ResolvedFileMap = {
  from: AbsoluteFilePath;
  to: AbsoluteFilePath;
};
