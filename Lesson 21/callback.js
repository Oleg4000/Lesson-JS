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


// eslint-disable-next-line no-unused-vars
function learnJS(lang, callback){
	console.log(`I learn: ${lang}`);
	callback();
}

function done(){
	console.log('Я пройшов урок');
}


learnJS('JavaScript', done);