'use strict';

import React from 'react';
import Icon from '~/components/icon';
import './css/toggle.scss';

const MainNavigationToggle = props => {

	if (!props) return null;

	return (
		<button aria-hidden="true" className={`main-navigation__toggle ${props.navigationIsVisible ? 'main-navigation-is-visible' : ''}`} onClick={((e) => props.onClick(e))}>
			<Icon type="bars" />
		</button>
	);

};

export default MainNavigationToggle;
