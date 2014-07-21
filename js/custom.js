"use strict";
var label = [
//NUMBERS
"Add 2 numbers without plus" , 
"Add 2 numbers without the 3rd variable",
"Add digits of a number",
"Find given number is Amstrong or not",
"Find given number is odd or even using modulus",
"Find given number is odd or using bitwise operator",
"Find given number is odd or even using division",
"Find Factorial of a given number",
"Find the Fibonacci Series",
"Find whether the given number is prime",
"Print prime number in a given range",
"Swap 2 numbers without 3rd variable",
"Swap 2 numbers using XOR",
"Multiply 2 numbers using log",
"Multiply 2 numbers using recursion",
//STRINGS
"Compare 2 Strings using strcmp",
"Compare 2 Strings without strcmp",
"Count number of vowels in a given string",
"Reverse the string",
"Check whether the string is a palindrome"
];

var link = [
"resource/Number/add_2_num/c/without_plus.html",
"resource/Number/add_2_num/c/without_3rd.html"
];

var generateList = function (type)
{
	switch (type) {
		case "All":
			buildForAll();
			break;
		case "String":
			buildForString();
			break;
		case "Number":
			buildForNumber();
			break;
		case "Conversion":
			buildForConversion();
			break;
		case "Sorting":
			buildForSorting();
			break;
		case "Others":
			buildForOthers();
			break;
	}

};

function buildForAll() {

	for (var i = 0 ; i < label.length ; i++) {
		var ulElement = document.getElementById("list");
		var listElement  = document.createElement("li");
		var anchorElement = document.createElement("a");
		var text = document.createTextNode(label[i]);
		anchorElement.setAttribute("href",link[i]);
		anchorElement.appendChild(text);
		listElement.appendChild(anchorElement);
		ulElement.appendChild(listElement);
	}
}