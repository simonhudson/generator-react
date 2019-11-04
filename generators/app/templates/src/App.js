'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';

const utils = require('~/utilities');

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
            <>
                <Header />
                <p>Hello world</p>
                <Footer />
            </>
        );
    }
}

export default App;