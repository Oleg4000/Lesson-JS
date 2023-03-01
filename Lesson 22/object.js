'use strrict';

const options ={
	name: 'test',
	with: 1024,
	heigt:1024,
	collors:{
		border:'black',
		bacground: 'red'
	},
	makeTest: function(){
		console.log('Test');
	}
};

options.makeTest();

/*Деструктуризація обєкта */
const {border, bacground} = options.collors;//Деструктуризація обєкта
console.log(border,bacground);

//console.log(Object.keys(options).length);//підрахунок обєктів в масиві

//console.log(options['colors']['border']);

//console.log(options.name);

//delete options.name;

//console.log(options);
/* let counter =0;
for (let key in options){
	if (typeof(options [key])==='object'){
		for (let i in options [key]){
			console.log(`Властивість: ${i} має значення ${options[key][i]}`);
			
		}
	}else{
		console.log(`Властивість: ${key} має значення ${options[key]}`);
		counter++;
	}
}

console.log(counter); */

