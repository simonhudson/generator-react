'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';
import MainNavigation from '~/components/main-navigation';
import Hero from '~/components/hero';
import FeatureRow from '~/components/feature-row';

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
                <FeatureRow />
                <Footer />
            </>
        );

    }
}

export default App;
