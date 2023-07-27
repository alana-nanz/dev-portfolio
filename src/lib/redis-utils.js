const parseFieldType = function parseFieldType(fieldName, value) {
	let parsedValue = value;

	switch (fieldName) {
	case "id":
	case "total":
	case "index":
	case "value":
		parsedValue = parseInt(value, 10);
		break;
	case "active":
		parsedValue = Boolean(value);
		break;
	default:
		break;
	}

	return parsedValue;
};

const parseMultiLevelHash = function parseMultiLevelHash(hash, base) {
	const returnObj = {};
	const rgxp = new RegExp(`${base}:(.*):(.*)`);

	Object.entries(hash).forEach(([key, value]) => {
		const matches = key.match(rgxp);

		if (matches) {
			const [, id, field] = matches;
			returnObj[id] = returnObj[id] || {};
			returnObj[id][field] = parseFieldType(field, value);
		}
	});

	return returnObj;
};

export { parseFieldType };
export { parseMultiLevelHash };
