const Moment = require('./Moment');
const DataFn = require('./DataFns');

class DataAdapter {
    constructor (inputData) {
        this.inputData = inputData
        this.dataApi =  new DataFn(inputData)
    }

    formatToDayMonthYear() {
        console.log(this.dataApi.formatToDayMonthYear())
    }
};

module.exports = DataAdapter;