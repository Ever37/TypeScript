(() => {

	type Hero = {
		name: string,
		age?: number,
		powers: number[],
		getName?: () => string,
	}

	let myCustomVariable: (string | number | Hero) = 'Fernando';
	console.log('myCustomVariable :', myCustomVariable);
	
	myCustomVariable = 20;
 	console.log('myCustomVariable :', myCustomVariable);

	myCustomVariable = {
		name: 'Ever',
		age: 29,
		powers: [1],
	}
	console.log('myCustomVariable :', myCustomVariable);

})();