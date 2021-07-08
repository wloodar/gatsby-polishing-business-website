import React from 'react';
import Helmet from 'react-helmet';

import SiteIcon from '../images/assets/polerowanieal-ikonka-biale.png';

const MainLayout = ({ children }: any ) => {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href={SiteIcon} type="image/x-icon" />
            </Helmet>
            { children }
        </>
    )
}

export default MainLayout;