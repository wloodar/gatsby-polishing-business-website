import React from 'react';
// import Logo from '../../images/polerowanieal-white.png';
import Logo from '../../images/polerowanieal-transparent-white.png';
import Phone from '../../images/assets/phone';
import Mail from '../../images/assets/mail';

import * as s from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={s.bar}>
            <div className="container">
                <div className={s.logo}>
                    <img src={Logo} alt="Logo PolerowanieAL"/>
                </div>  
            </div>
        </nav>
    )
}

export default Nav;