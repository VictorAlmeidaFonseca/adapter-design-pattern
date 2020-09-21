const dataFn = require('date-fns/format');
const parseIso = require('date-fns/parseISO');

class DataFn {
    constructor(inputData) {
        this.inputData = inputData;
    }

    parseISO() {
      return parseIso(this.inputData)
    }

    formatToDayMonthYear() {
        return dataFn(this.parseISO(), 'dd-MM-yyyy')
    }

};

const showData = new DataFn('2020-09-19');

showData.formatToDayMonthYear();

module.exports = DataFn;
