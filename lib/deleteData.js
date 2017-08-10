var $ = require('jquery');

module.exports = function (data) {
	 $("ul.todo>li").on('click', function (e) {
	$(this).remove();
}); 
}