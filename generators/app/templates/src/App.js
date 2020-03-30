'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';
import MainNavigation from '~/components/main-navigation';
import Hero from '~/components/hero';
import { get } from '~/api';
import { hasItems } from '~/utilities/array';
import Loading from '~/components/loading';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addGuestForm = React.createRef();
    }

    componentDidMount = () => {
        get('guests').then(response => {
            if (hasItems(response.data))
                this.setState({ guests: response.data });
        });
    };

    render = () => {
        return (
            <>
                <Header />
                <MainNavigation />
                <Hero page="home" />
                {!this.state.guests && <Loading />}
                {this.state.guests && (
                    <ul>
                        {this.state.guests.map((guest, index) => (
                            <li key={index}>
                                {guest.firstName} {guest.lastName}
                            </li>
                        ))}
                    </ul>
                )}
                <Footer />
            </>
        );
    };
}

export default App;
