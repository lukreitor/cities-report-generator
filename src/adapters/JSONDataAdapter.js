// src/adapters/JSONDataAdapter.js
import fs from 'node:fs';

export default class JSONDataAdapter {
  readData(filename) {
    const data = fs.readFileSync(filename);
    return JSON.parse(data);
  }
}

