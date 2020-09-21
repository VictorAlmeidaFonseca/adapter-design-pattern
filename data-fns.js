const dataFn = require('date-fns/format');
const parseIso = require('date-fns/parseISO');

class DataFn {
    constructor(inputData) {
        this.inputData = inputData
    }

    formatToDayMonthYear() {
        console.log(dataFn(parseIso(this.inputData), 'dd-MM-yyyy'))
    }

}
 module.exports = DataFn;
