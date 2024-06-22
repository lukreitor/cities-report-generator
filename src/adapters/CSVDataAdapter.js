// src/adapters/CSVDataAdapter.js
import fs from 'node:fs';
import csvParser from 'csv-parser';

export default class CSVDataAdapter {
  readData(filename) {
    const data = [];
    fs.createReadStream(filename)
      .pipe(csvParser())
      .on('data', (row) => data.push(row))
      .on('end', () => {
        return data;
      });
  }
}
