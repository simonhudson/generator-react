'use strict';

import React from 'react';
import './css/styles.scss';
import LoadingImage from './loading.svg';

const Loading = props => {
    return (
        <div className="loading" data-test="loading">
            <img alt="Loading" data-test="loading__img" src={LoadingImage} />
        </div>
    );
};

export default Loading;
