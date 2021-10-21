if(!window.Intl){
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}

let IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
let IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');


let es = require('./es');
let en = require('./en-US');

let Messages = {};
Messages.es = es;
Messages['en-US'] = en;

let locale = localStorage.locale || 'es';

module.exports = {
	message : function (text, opts) {
		opts = opts || {};
		let msg = new IntlMessageFormat(Messages[locale][text], locale, null);
		return msg.format(opts)
	},
	date: new IntlRelativeFormat(locale)
}
