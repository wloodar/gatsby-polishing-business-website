import React from 'react';
import { Link } from 'gatsby';
// import Logo from '../../images/polerowanieal-white.png';
// import Logo from '../../images/polerowanieal-transparent-white.png';
import Phone from '../src/images/assets/phone';
import Mail from '../src/images/assets/mail';

import * as s from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={s.bar}>
            <div className="container">
                <div className={s.logo}>
                    {/* <img src={Logo} alt="Logo PolerowanieAL"/> */}
                </div>  
                <div className={s.list}>
                    <ul>
                        <li>
                            <Link to="/onas/">Na temat</Link>
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
                        <li>
                            <Link to="/kontakt/">Kontakt</Link>
                        </li>
                    </ul>
                </div>  
            </div>
        </nav>
    )
}

export default Nav;