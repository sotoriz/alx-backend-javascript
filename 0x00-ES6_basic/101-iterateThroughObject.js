export default function iterateThroughObject(reportWithIterator);
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
      ...createEmployeesObject('engineering', ['placeholder']),
      ...createEmployeesObject('design', ['placeholder']),
    };

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);
    console.log('Placeholder');
