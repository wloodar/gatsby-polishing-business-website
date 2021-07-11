import React from 'react';
import Helmet from 'react-helmet';

import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer';
import s from './mainLayout.module.scss';

import SiteIcon from '../images/assets/polerowanieal-ikonka-biale.png';

const MainLayout = ({ children }) => {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href={SiteIcon} type="image/x-icon" />
            </Helmet>
            <Nav/>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout;