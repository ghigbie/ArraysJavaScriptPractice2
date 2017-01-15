//this document was created in the command line

var numbers = [1,2,3,4,5,6,7];
var chars = ["a", "b", "c", "d", "e", "f"];

function printReverse(array){
	for(var a = array.length-1; a > -1; a--){
		console.log(array[a]);
	}
}

printReverse(numbers);
console.log("///////////////")
printReverse(chars);



var numbers1 = [1,1,1,1,1,1];
var numbers2 = [2,1,1,1,1,1];
var chars1 = ["a", "b", "c", "d"];
var chars2 = ["a", "a", "a", "a"];

function isUniform(array){
	for(var a = 0; a < array.length-1; a++){
		if(array[a] !== array[a+1]){
			return false;
		}else{
			return true;
		}
	}
}

isUniform(numbers1);
console.log("//////////");
isUniform(numbers2);
console.log("//////////");
isUniform(chars1);
console.log("//////////");
isUniform(chars2);
console.log("//////////");