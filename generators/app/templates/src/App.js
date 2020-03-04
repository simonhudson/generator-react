'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';
import MainNavigation from '~/components/main-navigation';
import Hero from '~/components/hero';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        return (
            <>
                <Header />
                <MainNavigation />
                <Hero page="home" />
                <Footer />
            </>
        );

    }
}

export default App;
