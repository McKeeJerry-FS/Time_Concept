const express = require('express');
const bodyParser = require('body-parser');
const timezone = require('zipcode-to-timezone');
const ejs = require('ejs');
const app = express();
const port = 5001;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	res.render('index', { greeting: '' });
});
app.post('/greet', (req, res) => {
	const zip = req.body.zip;
    const tz = timezone.lookup(zip)
	const greeting = `Timezone for zipcode ${zip} is ${tz}`;
	res.render('index', { greeting });
});
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

