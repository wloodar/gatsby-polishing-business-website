import React from 'react';
import { Link } from 'gatsby';

import * as s from './footer.module.scss';

import MailIcon from '../../images/assets/mail';
import PhoneIcon from '../../images/assets/phone';
import LocationIcon from '../../images/assets/location';
import Instagram from '../../images/assets/instagram';
import Facebook from '../../images/assets/facebook';
import Logo from '../../images/polerowanieal-transparent-white.png';

const Footer = () => {
    return (
        <footer className={s.wrapper}>
            <div className="container">
                <div className={s.info}>
                    <div className={s.address}>
                        <h2>PolerowanieAL Warszawa</h2>
                        <p>
                            Szawelska 35, 
                            <span>03-107 Warszawa</span>
                        </p>
                    </div>
                    <div className={s.contact}>
                        <ul>
                            <li>
                                <PhoneIcon/>
                                <div>
                                    <a href="tel:512 542 024">+48 512 542 024</a>
                                </div>
                            </li>
                            <li>
                                <MailIcon/>
                                <div>
                                    <a href="mailto:polerowanieal@gmail.com">polerowanieal@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <LocationIcon/>
                                <div>
                                    <a href="https://www.google.com/maps/place/PolerowanieAL/@52.353361,20.9249543,15.07z/data=!4m5!3m4!1s0x471edbe52cbe67b7:0xd97052fca3e6b5fd!8m2!3d52.353318!4d20.9347112?hl=pl-PL">Szawelska 35, 03-107 Warszawa</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={s.logo}>
                        <Link to="/">
                            <img src={Logo} alt="Logo PolerowanieAL"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={s.separator}></div>
            <div className="container">
                <div className={s.bottom}>
                    <div className={s.socials}>
                        <a href="https://www.instagram.com/polerowanieal/" title="Instagram Polerowanieal.pl" target="_blank" rel="noreferrer"><Instagram/></a>
                        <a href="https://www.facebook.com/Polerowanie-wibracyjne-Wo%C5%82omin-110733307010253/" target="_blank" rel="noreferrer"><Facebook/></a>
                    </div>
                    <div className={s.nav}>
                        <ul>
                            <li>
                                <Link to="/na-temat/">Na temat</Link>
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
                <div className={s.copyright}>
                    © 2021 PolerowanieAL
                </div>
            </div>
        </footer>
    )
}

export default Footer;