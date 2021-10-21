const page = require('page');
const empty = require('empty-element');
const title = require('title');
const template = require('./template');

page('/',(ctx, next) => {
	title('Home');
	let home = document.getElementById('main-container');
	empty(home).appendChild(template);
});