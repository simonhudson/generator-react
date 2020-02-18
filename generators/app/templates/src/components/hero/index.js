'use strict';

import React from 'react';
import './css/styles.scss';

const CONFIG = {
    home: {
        title: 'Welcome to our site',
        useLargeHero: true
    },
    about: {
        title: 'About us'
    }
};

const setClassName = page => {
    const classNames = ['hero'];
    if (CONFIG[page].useLargeHero) classNames.push('hero--large');
    return classNames.join(' ');
};

const Hero = props => {

	if (!props.page || !CONFIG[props.page]) return null;

	return (
        <div className={setClassName(props.page)} data-test="hero">
            <div className="hero__wrap">
                <p className="hero__title" data-test="hero__title">{CONFIG[props.page].title}</p>
            </div>
        </div>
	);

};

export default Hero;
