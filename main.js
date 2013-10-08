$(document).ready(function(){
// Part I

// 1. 

var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
var person3 = {firstName: 'Gollum', age: 589, color: 'green'};

var personList = [person1, person3];

var sayHello = function() {
 alert('Hello, ' + this.firstName);
};

var greetOneAnother = function(personA, personB) {
 alert("{0}, meet {1} and {2}".supplant([this.firstName, personA.firstName, personB.firstName]));
};

// 2. See utility file.

// 3. Without an object to call the result is Hello, undefined

// 4. 

// sayHello.call(person1);

// 5. 
// greetOneAnother.apply(person2, personList);

// Part II

// 1. Three buttons.

// 2. Event handler to display text of button that was clicked.

// $(document).on('click', 'button', function(){
// 	alert($(this).text());
// });

// 3. Reuse event hanlder - refactor previous anonymous function into named function.



var alertThisText = function(){
	alert($(this).text());
};


$(document).on('click', 'button', alertThisText);

// 4. Called even handler - nothing got reported until I clicked a button.

// alertThisText();

// 5. Use call to invoke the event handler.

alertThisText.call($('.one'));

}); //end of document on load.