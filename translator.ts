function translate(str: string) {
	const translationTable: [string, string][] = [
		['!', 'Yes'],
		['?', 'No'],
		['!!', 'New idea'],
		['??', 'Question'],
		['!!!', 'Briliant'],
		['???', 'Blunder'],
		['!!?', 'Shut up'],
		['?!?', 'No u'],
		['!?!', 'Yes me'],
		['!!!!', 'Important'],
		['?!?!?!', 'Rules broken'],

		['!.!', 'Agree'],
		['?.?', 'Disagree'],
		['.', 'idk'],
		['...', 'clarify'],
	];

	let out: string[] = [];
	str.split(/ +/g).forEach((syl) => {
		let sylsyl = syl.split(/-/g);
		let c: string[] = [];
		sylsyl.forEach((b) => {
			let trans = translationTable.find((a) => a[0] === b);
			if (trans !== undefined) {
				c.push(trans[1]);
			} else c.push(`*Unknown: "${b}"*`);
		});
		out.push(c.join('-'));
	});

	console.log(out.join(' '));
}

translate('??-!!');
