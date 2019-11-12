'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    registerServiceWorker = () => {
        if (navigator.serviceWorker) {
            navigator.serviceWorker.register('service-worker.js').then(registration => {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, (err) => {
              console.log('ServiceWorker registration failed: ', err);
            });
        }
    }

    componentDidMount = () => {
        this.registerServiceWorker();
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