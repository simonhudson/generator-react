'use strict';

import React from 'react';

const LabelInfo = props => {

	if (!props.labelInfo) return null;

	return (
		<span className="label-info" data-test="label-info">{props.labelInfo}</span>
	);

};

export default LabelInfo;
