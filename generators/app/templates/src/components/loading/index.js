'use strict';

import React from 'react';
import './css/styles.scss';

const Loading = props => {

	return (
        <div className="loading" data-test="loading">
            <p className="loading__text">Loading...</p>
        </div>
    );

};

export default Loading;
