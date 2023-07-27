function randomBetween(min, max) {
	return Math.floor((Math.random() * (max - min)) + min);
}

function randomBoolean() {
	return Math.random() >= 0.5;
}

function randomBooleanPercent(precentage) {
	return Math.ceil(Math.random() * 100) <= precentage;
}

function randomIndex(array) {
	return randomBetween(0, array.length - 1);
}

function randomIndexes(array, count) {
	const indexes = [];

	if (count > array.length) {
		return false;
	}

	while (indexes.length < count) {
		const index = randomIndex(array);

		if (indexes.indexOf(index) === -1) {
			indexes.push(index);
		}
	}

	return indexes;
}

function randomValue(array) {
	let value = null;

	if (Array.isArray(array)) {
		value = array[randomIndex(array)];
	} else {
		value = array[randomValue(Object.keys(array))];
	}

	return value;
}

function randomValues(array, count) {
	const values = [];
	const indexes = randomIndexes(array, count);

	indexes.forEach((index) => {
		values.push(array[index]);
	});

	return values;
}

function shuffle(array) {
	const shuffled = [...array];

	for (let i = shuffled.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
}

export { randomBetween };
export { randomBoolean };
export { randomBooleanPercent };
export { randomIndex };
export { randomIndexes };
export { randomValue };
export { randomValues };
export { shuffle };
