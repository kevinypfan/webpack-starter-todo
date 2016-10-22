import $ from 'jquery';
import getForm from "./lib/form.data.js";
import insertData from "./lib/insertData.js";

let form = $("form");

form.on('submit', function (e) {
	e.preventDefault();
	var value = getForm(e);
	insertData(value);
	alert(`Add item: ${value}`);
});



