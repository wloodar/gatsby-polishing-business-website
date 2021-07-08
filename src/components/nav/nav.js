import React from 'react';

import Logo from '../../images/polerowanieal-white.png';

import * as s from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={s.bar}>
            <div className={s.logo}>
                <img src={Logo} alt="Logo PolerowanieAL"/>
            </div>  
        </nav>
    )
}

export default Nav;