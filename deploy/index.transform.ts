// eslint-disable-next-line import/no-extraneous-dependencies
import { TargetOptions } from '@angular-builders/custom-webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { stripHtml } from 'string-strip-html';

export default (targetOptions: TargetOptions, indexHtml: string) => {
  return stripHtml(indexHtml, {
    ignoreTags: ['script', 'link', 'style'],
  }).result;
};
