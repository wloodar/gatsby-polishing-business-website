import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/polerowanieal-white.png';

import * as s from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={s.bar}>
            <div className="container">
                <div className={s.logo}>
                    <Link to="/">
                        <img src={Logo} alt="Logo PolerowanieAL"/>
                    </Link> 
                </div>  
                <div className={s.list}>
                    <ul>
                        <li>
                            <Link to="/">Strona Główna</Link>
                        </li>
                        <li>
                            <Link to="/cennik/">Cennik</Link>
                        </li>
                        <li>
                            <Link to="/oferta/">Oferta</Link>
                        </li>
                        <li>
                            <Link to="/galeria/">Galeria</Link>
                        </li>
                        <li className={s.list__contact}> 
                            <Link to="/kontakt/" className="btn btnPrimary">Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;