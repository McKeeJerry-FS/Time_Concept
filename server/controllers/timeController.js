const zipTimeZone = require('zipcode-to-timezone');


/**
 * Get /
 * Homepage
 */

exports.homepage = async (req, res) => {
    try {
        var tz = zipTimeZone.lookup('06084');

        console.log( tz );

        res.render('index', { title: 'Time Concept Homepage' }, tz);
    } catch (error) {
        console.log('err', error);
        res.status(500).json({ msg: error.message || 'Error Occurred'});
    }
};