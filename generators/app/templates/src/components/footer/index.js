'use strict';

import React from 'react';
import './css/styles.scss';

const Footer = props => {
    if (!props) return null;

    const currentYear = new Date().getFullYear();

    return (
        <footer data-test="footer">
            <p data-test="footer__copyright">Copyright {currentYear}</p>
        </footer>
    );
};

export default Footer;
