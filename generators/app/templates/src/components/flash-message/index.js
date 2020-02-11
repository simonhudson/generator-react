'use strict';

import React, { Component } from 'react';
import './css/styles.scss';
import Alert from '~/components/alert';

class FlashMessage extends Component {

    constructor(props) {
		super(props);
        this.state = {
            isMovingIntoView: false,
            isMovingOutOfView: false
        };
	}

    componentDidMount = () => {

    }

    render = () => {

        const { props } = this;

        return (
            <div className="flash-message">
    			<Alert type="success" hasIcon={true}>
    				{props.title && (<p className="flash-message__title">{props.title}</p>)}
    	            <p>{props.message}</p>
    			</Alert>
    		</div>
        );
    }
}

export default FlashMessage;
