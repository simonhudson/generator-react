'use strict';

module.exports = (valueA, valueB) => {
	if (!valueA || (valueA && isNaN(valueA)) || !valueB || (valueB && isNaN(valueB))) return null;
	return valueA - valueB;
};