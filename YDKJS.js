// You don’t know JavaScript:
// Scope and Closures:

//Using function as scope:
var a = 2;  
	  
function foo() { 
	var a = 3;  
	console.log( a ); 
} 
foo(); 
	  
console.log( a ); // 2 (only returns value declared in global scope) 

// Problem:
// Have to declare a newly named-function which pollutes the enclosing scope (usually global)
// Also have to call the function by name, so that the wrapped code executes.

// Solution = Iffy → call the function immediately after creating it → treats function as expression

var a = 2;  
	  
(function foo(){ 
var a = 3;  
console.log( a )
})(); // 3  
 
console.log( a ); // 2  

// Note: The easiest way to distinguish declaration vs. expression is the position of the word "function" in the statement (not just a line, but a distinct statement). If "function" is the very first thing in the statement, then it's a function declaration. Otherwise, it's a function expression.
yes