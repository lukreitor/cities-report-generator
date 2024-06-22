import FormaterFactory from './src/FormaterFactory.js';
import CitiesReporter from './src/CitiesReporter.js';
import JSONDataAdapter from './src/adapters/JSONDataAdapter.js';
import CSVDataAdapter from './src/adapters/CSVDataAdapter.js';

const [cmd, script, param1, param2] = process.argv;
const filename = './data/' + param2;

const dataAdapter = param2.endsWith('.json') ? new JSONDataAdapter() : new CSVDataAdapter();
const formater = FormaterFactory.createFormater(param1);

const reporter = new CitiesReporter({
  formaterStrategy: formater,
  dataAdapter: dataAdapter
});

const output = reporter.report(filename);

console.log(output);
