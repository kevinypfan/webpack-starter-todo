var $ = require('jquery');

module.exports = function (data) {
	$("ul.todo").append(`<li>${data}</li>`);
	return true;
}