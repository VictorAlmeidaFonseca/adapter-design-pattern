const moment = require('moment');

class Moment {
    constructor (inputData) {
        this.inputData =  inputData;
    }

    formatToDayMonthYear() {
        console.log(moment(this.inputData).format('DD-MM-YYYY'))
    }
};

module.exports =  Moment;

