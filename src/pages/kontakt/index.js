import React from 'react';
import SEO from '../../components/seo';
import cs from 'classnames';

import * as s from './contact.module.scss';
import MainLayout from '../../components/mainLayout';

import Instagram from '../../images/assets/instagram';
import Facebook from '../../images/assets/facebook';

const Contact = () => {

    return (
        <MainLayout>
            <SEO
                title="Skontaktuj się z nami | PolerowanieAL"
                description='Już teraz umów się lub dowiedz więcej - skontaktuj się z nami | PolerowanieAL - Polerowanie wibracyjne i roto-wibracyjne części do motocykli zabytkowych jak i współczesnych, felg aluminiowych do samochodów osobowych oraz ciężarowych do 24".'
            />
            <div className="container navMargin">
                <div className={s.wrapper}>
                    <div className={s.info}>
                        <div className="boxhead">
                            <h1>Skontaktuj się z nami</h1>
                        </div>

                        <div className={s.info__row}>
                            <span>Telefon: </span>
                            <a href="tel:512 542 024">+48 512 542 024</a>
                        </div>
                        <div className={s.info__row}>
                            <span>Adres Email: </span>
                            <a href="mailto:polerowanieal@gmail.com">polerowanieal@gmail.com</a>
                        </div>
                        <div className={s.info__row}>
                            <span>Lokalizacja: </span>
                            <a href="https://www.google.com/maps/place/PolerowanieAL/@52.353361,20.9249543,15.07z/data=!4m5!3m4!1s0x471edbe52cbe67b7:0xd97052fca3e6b5fd!8m2!3d52.353318!4d20.9347112?hl=pl-PL">Szawelska 35, 03-107 Warszawa</a>
                        </div>
                        <div className={cs(s.info__row, s.info__socials)}>
                            <span>Nasze profile: </span>
                            <a href="https://www.instagram.com/polerowanieal/" title="Instagram Polerowanieal.pl" target="_blank" rel="noreferrer"><Instagram/></a>
                            <a href="https://www.facebook.com/Polerowanie-wibracyjne-Wo%C5%82omin-110733307010253/" target="_blank" rel="noreferrer"><Facebook/></a>
                        </div>
                    </div>
                    <div className={s.map}>
                        <div style={{ width: "100%" }}><iframe width="100%" height="500" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=szawelska%20warszawa+(poelrowanieal)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                    </div>
                </div>
            </div>  
        </MainLayout>
    )
}

export default Contact;