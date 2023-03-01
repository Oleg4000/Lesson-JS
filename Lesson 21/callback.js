'use strrict';

function first(){
	// Do something
	setTimeout(function(){
		console.log(1);
	},500);
}


function second() {
	console.group(2);
}

first();
second();