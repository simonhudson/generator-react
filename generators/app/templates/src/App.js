'use strict';

import React, { Component } from 'react';
import './assets/css/styles.scss';
import { getClub, getFixtures, getResults } from './api';
import { transformSquad, transformResults } from './utilities/transform';
import Home from './components/views/home';
import Fixtures from './components/views/fixtures';
import Results from './components/views/results';
import Squad from './components/views/squad';
import Header from './components/header';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
    }

    render = () => {
        
        const { state } = this;
        if (!state) return null;
        
        return (
            <p>Hello world</p>
        );
    }
}

export default App;