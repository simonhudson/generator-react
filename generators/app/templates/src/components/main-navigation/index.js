'use strict';

import React, { Component } from 'react';
import MainNavigationToggle from './toggle';
import './css/styles.scss';
const items = require('./items.json');

class MainNavigation extends Component {

    constructor(props) {
		super(props);
        this.state = {
            isVisible: false,
            toggleClicked: false
        };
	}

    componentDidMount = () => {

    }

    toggleMainNavigation = e => {
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        this.setState({ toggleClicked: true });
        const currentState = this.state.isVisible;
        this.setState({ isVisible: !currentState });
    };

    render = () => {

        const { props, state } = this;

        return (
            <>
                <MainNavigationToggle onClick={this.toggleMainNavigation} navigationIsVisible={state.isVisible}/>
                <nav className={`main-navigation ${state.toggleClicked ? state.isVisible ? 'main-navigation--is-visible' : 'main-navigation--is-hidden' : ''}`}>
                    <ul className="main-navigation__list">
                        {items.map((item, index) => {
                            return (
                                <li key={index} className="main-navigation__item">
                                    <a className="main-navigation__link" href={item.href}>{item.label}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </>
        );
    }
}

export default MainNavigation;
