import React from 'react';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions'; 

import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer';

import SiteIcon from '../images/assets/polerowanieal-ikonka-biale.png';

const MainLayout = ({ children }) => {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href={SiteIcon} type="image/x-icon" />
            </Helmet>
            <Nav/>
            <PageTransition
                defaultStyle={{
                    transition: 'all 700ms ease',
                    transform: 'translateY(17px)',
                    opacity: '0'
                }}
                transitionStyles={{
                    entering: { transform: 'translateY(0)', opacity: '1' },
                    entered: { transform: 'translateY(0)', opacity: '1' },
                    exiting: { transform: 'translateY(0)', opacity: '1' },
                }}
                transitionTime={500}
            >
                <main>
                    { children }
                </main>
            </PageTransition>
            <Footer/>
        </>
    )
}

export default MainLayout;