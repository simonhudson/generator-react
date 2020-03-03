'use strict';

import React from 'react';
import './css/styles.scss';

const Card = props => {

    if (!props) return null;

	return (
        <div className="card" data-test="card">
            <div className="card__inner">
                <div className="card__media">
                    
                </div>
                <div className="card__content">
                    {props.title && (<p className="card__title">{props.title}</p>)}
                    {props.content && (<p className="card__content-text">{props.content}</p>)}
                </div>
            </div>
        </div>
	);

};

export default Card;
