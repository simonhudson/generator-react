'use strict';

import React from 'react';
import './css/styles.scss';

const Accordion = props => {

	if (!props.summaryText) return null;

	return (
        <details className="accordion" data-test="accordion">
            <summary className="accordion__summary" data-test="accordion__summary">{props.summaryText}</summary>
            <div className="accordion__content" data-test="accordion__content">
				{props.children}
			</div>
		</details>
	);

};

export default Accordion;
