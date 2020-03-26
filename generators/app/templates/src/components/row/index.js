// 'use strict';

// import React from 'react';
// import './css/styles.scss';

// const Row = props => {

// 	return (
//         <div className="row" data-test="row">
//             <div className="row__wrap" data-test="row__wrap">
//                 {props.children}
//             </div>
//         </div>
// 	);

// };

// export default Row;

'use strict';

import React, { Component } from 'react';
import './css/styles.scss';
import Card from '~/components/card';
import Loading from '~/components/loading';
import { get } from '~/api';

class FeatureRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: null
        };
    }

    componentDidMount = () => {
        this.setState({ isLoading: true });
        get('people').then(response => {
            this.setState({
                data: response.results.slice(0, 3),
                isLoading: false
            });
        });
    };

    render = () => {
        return (
            <div className="row" data-test="row">
                <div className="wrap row__wrap" data-test="row__wrap">
                    {this.state.isLoading && <Loading />}
                    {!this.state.isLoading &&
                        this.state.data &&
                        this.state.data.map((item, index) => {
                            return <Card key={index} title={item.name} />;
                        })}
                </div>
            </div>
        );
    };
}

export default FeatureRow;
