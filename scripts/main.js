/**
 * AUTHOR: Jacob Kromm
 * VERSION: 1.0.0
 * CREATED: 03.16.15
 * ASSIGNMENT: NNSP Main JS
 */

"use strict";

function getDate() {
	/** @type {Date} */
	var date = new Date(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		year = date.getFullYear(),
		weekDay = date.getDay(),
		fullDate = '<h3>' + month + "/" + day + "/" + year + '<h3>';
	document.getElementById("weekDay").innerHTML = getWeekDay(weekDay);
	return fullDate;
}

function getWeekDay(weekDay) {
	/** @type {Array.<string>} */
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return '<h3>' + days[weekDay] + '<h3>';
}

function listenForRow(row) {
	var oldRow = document.getElementById(row);
	oldRow.addEventListener('change', addRow)

}

function addRow() {

}


window.onload = function() {
	document.getElementById("date").innerHTML = getDate();
}