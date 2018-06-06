/* eslint no-param-reassign:["error",{"props":true,"ignorePropertyModificationsFor":["content"]}] */
/**
 * General configuration for the program.
 */

import dotenv from 'dotenv';
import { readFileSync } from 'fs';

dotenv.config();

/**
 * Makes it possible to load *.sql files.
 */
require.extensions['.sql'] = (content, filename) => {
  content.exports = readFileSync(filename, 'utf8');
};
