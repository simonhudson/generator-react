'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';
import MainNavigation from '~/components/main-navigation';
import Hero from '~/components/hero';
import FeatureRow from '~/components/feature-row';
import { get } from '~/api';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        // get('people').then(response => this.setState({ data: response }));
    }

    render = () => {

        return (
            <>
                <Header />
                <MainNavigation />
                <Hero page="home" />
                <FeatureRow
                    items={[
                        { title: 'Lorem ipsum', ctaUrl: '#' },
                        { title: 'Craig Bryson', ctaUrl: '#' },
                        { title: 'The Texas Chain Saw Massacre', ctaUrl: '#' }
                    ]}
                />
                <Footer />
            </>
        );
    }
}

export default App;
