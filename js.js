//this document was created in the command line

var numbers = [1,2,3,4,5,6,7];
var chars = ["a", "b", "c", "d", "e", "f"];

function printReverse(array){
	var length = array.length;

	for(var a = array.length-1; a < 0; a--){
		console.log(array[a]);
	}
}


printReverse(numbers);
printReverse(chars);