'use strict';

import React from 'react';
import './css/styles.scss';
import FeatureRowItem from './item';

const FeatureRow = props => {

    if (!props.items || !props.items.length) return null;

	return (
        <div className="feature-row" data-test="feature-row">
            <div className="wrap feature-row__wrap">
                {props.items.map((item, index) => {
                    return (
                        <FeatureRowItem key={index} {...item} />
                    );
                })}  
            </div>
        </div>
	);

};

export default FeatureRow;
