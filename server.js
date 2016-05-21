'use strict';
const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');

app.engine('ejs', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));

const messages = ['hello', 'world'];

app.get('/', (req, res) => {
	res.render('index.ejs', {
		messages
	});
});

app.get('/post', (req, res) => {
	const {message} = req.query;
	if (message) {
		messages.push(message);
	}
	res.redirect('/');
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
