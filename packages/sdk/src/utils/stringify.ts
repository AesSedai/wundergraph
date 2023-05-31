import json from 'big-json';
import util from 'node:util';
export const stringifyJson = util.promisify(json.createStringifyStream);
