var arguments = process.argv
var sum = 0;
for (i = 2; i < arguments.length; i=i+1) {
	currNum =  Number(arguments[i]);
	if (!isNaN(currNum)) {sum = sum + currNum;}
}

console.log(sum);