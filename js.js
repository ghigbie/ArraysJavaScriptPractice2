//this document was created in the command line

var numbers = [1,2,3,4,5,6,7];
var chars = ["a", "b", "c", "d", "e", "f"];

function printReverse(array){
	for(var a = array.length-1; a > -1; a--){
		console.log(array[a]);
	}
	console.log("//////////");
}

printReverse(numbers);
printReverse(chars);


var numbers1 = [1,1,1,1,1,1];
var numbers2 = [2,1,1,1,1,1];
var chars1 = ["a", "b", "c", "d"];
var chars2 = ["a", "a", "a", "a"];

function isUniform(array){
	for(var a = 0; a < array.length-1; a++){
		if(array[a] !== array[a+1]){
			console.log("false");
			console.log("//////////");
			return false;
		}else{
			console.log("true");
			console.log("//////////");
			return true;
		}
	}
}

isUniform(numbers1);
isUniform(numbers2);
isUniform(chars1);
isUniform(chars2);


var numbers3 = [1,2,3];
var numbers4 = [10,3,10,4];
var numbers5 = [-5, 100];

function sumArray(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		sum+=array[i];
	}
	console.log(sum);
	console.log("/////////////");
}

sumArray(numbers3);
sumArray(numbers4);
sumArray(numbers5);

