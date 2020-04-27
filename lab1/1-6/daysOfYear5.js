const moment = require('moment');

module.exports = () => {
    const now = moment()
    const start = moment().startOf('year')
    const diff = now.diff(start, 'days');
    console.log(diff);
}
