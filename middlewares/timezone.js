const timezone = require('zipcode-to-timezone');

const showTimeZone = (req, res) => {
    var tz = zipTimeZone.lookup('06084');
    console.log( tz );

    res.render()

}


module.exports = timezone;