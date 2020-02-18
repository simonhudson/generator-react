'use strict';

import React from 'react';
import './css/item.scss';

const FeatureRowItem = props => {

    console.log('---------------');
    console.log(props);
    console.log('---------------');

	return (
        <div className="feature-row-item" data-test="feature-row-item">
            <p className="feature-row-item__title">{props.title}</p>
            <a className="btn btn--primary btn--is-hollow" href={props.ctaUrl}>Find out more</a>
        </div>
	);

};

export default FeatureRowItem;
