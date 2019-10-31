'use strict';

module.exports = value => {
	if (!value || (value && typeof value !== 'number') || (value && isNaN(value))) return null;
	return (value % 2 !== 0);
};