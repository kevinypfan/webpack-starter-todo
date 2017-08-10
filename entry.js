import $ from 'jquery';
import getForm from "./lib/form.data.js";
import insertData from "./lib/insertData.js";
import deleteData from "./lib/deleteData.js";
let form = $("form");


form.on('submit', function (e) {
	e.preventDefault();
	var value = getForm(e);
	insertData(value);
	alert(`Add item: ${value}`);
    deleteData(value);
});




