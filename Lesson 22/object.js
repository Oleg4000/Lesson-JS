'use strrict';

const options ={
	name: 'test',
	with: 1024,
	heigt:1024,
	collors:{
		border:'black',
		bacground: 'red'
	}
};

//console.log(options.name);

//delete options.name;

//console.log(options);

for (let key in options){
	if (typeof(options [key])==='object'){
		for (let i in options [key]){
			console.log(`Властивість: ${i} має значення ${options[key][i]}`);
		}
	}else{
		console.log(`Властивість: ${key} має значення ${options[key]}`);
	}
}