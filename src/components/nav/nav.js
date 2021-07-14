import React, { useState } from 'react';
import { Link } from 'gatsby';
import cs from 'classnames';
import Logo from '../../images/polerowanieal-white.png';

import * as s from './nav.module.scss';

const Nav = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className={s.bar}>
            <div className="container">
                <div className={s.logo}>
                    <Link to="/">
                        <img src={Logo} alt="Logo PolerowanieAL"/>
                    </Link> 
                </div>  
                <div className={cs(s.list, click ? s.list__active : null)}>
                    <ul>
                        <li>
                            <Link to="/" onClick={handleClick}>Strona Główna</Link>
                        </li>
                        <li>
                            <Link to="/cennik/" onClick={handleClick}>Cennik</Link>
                        </li>
                        <li>
                            <Link to="/oferta/" onClick={handleClick}>Oferta</Link>
                        </li>
                        <li>
                            <Link to="/galeria/" onClick={handleClick}>Galeria</Link>
                        </li>
                        <li className={s.list__contact}> 
                            <Link to="/kontakt/" onClick={handleClick} className="btn btnPrimary">Kontakt</Link>
                        </li>
                    </ul>
                </div>
                <div className={s.mobileIcon} onClick={handleClick}>
                    <span>Menu</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav;