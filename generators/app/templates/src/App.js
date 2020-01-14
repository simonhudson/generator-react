'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import Header from '~/components/header';
import Footer from '~/components/footer';
import MainNavigation from '~/components/main-navigation';
import Alert from '~/components/alert';
import NumberSelect from '~/components/form/select/number';
import MonthSelect from '~/components/form/select/month';
import DaySelect from '~/components/form/select/day';
import RadioGroup from '~/components/form/radio-group';
import Accordion from '~/components/accordion';
import ButtonRow from '~/components/button-row';
import Button from '~/components/button';
import FlashMessage from '~/components/flash-message';
import { get } from '~/api';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        get('people').then(response => console.log(response));
    }

    render = () => {

        const { state } = this;

        return (
            <>
                <FlashMessage type="success" title="Success message" message="MRKTM-123 successfully updated." />
                <ButtonRow>
                    <Button label="Click me" onClick={(() => console.log(1) )} />
                    <Button label="Click me" isHollow={true} onClick={(() => console.log(1) )} />
                    <Button variant="secondary" label="Click me" onClick={(() => console.log(1) )} />
                    <Button variant="secondary" label="Click me" isHollow={true} onClick={(() => console.log(1) )} />
                </ButtonRow>
                <Accordion summaryText="Find out more info">
                    <p>This is some more info</p>
                </Accordion>
                <RadioGroup
                    legend="Tell us your gender"
                    inputName="gender"
                    inputs={[
                        { id: 'gender-male', value: 'male', labelText: 'Male' },
                        { id: 'gender-female', value: 'female', labelText: 'Female' },
                        { id: 'gender-other', value: 'other', labelText: 'Other' }
                    ]}
                />
                <DaySelect id="dob-day" labelText="Day" labelInfo="This is some extra info for you" />
                <NumberSelect id="dob-date" labelText="Day" min={1} max={31} hideLabel={true} />
                <MonthSelect id="dob-month" labelText="Month" />
                <NumberSelect id="dob-year" labelText="Year" min={(new Date().getFullYear() - 99)} max={(new Date().getFullYear())} descending={true} />
                <Alert type="info" hasIcon={true}>
                    <p>This is some information</p>
                </Alert>
                <Alert type="error" hasIcon={true}>
                    <p>This is some information</p>
                </Alert>
                <Alert type="warning" hasIcon={true}>
                    <p>This is some information</p>
                </Alert>
                <Alert type="success" hasIcon={true}>
                    <p>This is some information</p>
                </Alert>
                <Header />
                <MainNavigation />
                <p>Hello world</p>
                <Footer />
            </>
        );
    }
}

export default App;
