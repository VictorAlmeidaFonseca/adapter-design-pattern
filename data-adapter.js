const Moment = require('./moment');
const DataFn = require('./data-fn');

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