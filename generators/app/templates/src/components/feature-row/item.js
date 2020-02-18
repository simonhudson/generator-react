'use strict';

import React from 'react';
import './css/item.scss';

const FeatureRowItem = props => {

    if (!props.title || !props.ctaUrl) return null;

	return (
        <div className="feature-row-item" data-test="feature-row-item">
            <p className="feature-row-item__title" data-test="feature-row-item__title">{props.title}</p>
            <a className="btn btn--primary btn--is-hollow" data-test="feature-row-item__cta" href={props.ctaUrl}>Find out more</a>
        </div>
	);

};

export default FeatureRowItem;
