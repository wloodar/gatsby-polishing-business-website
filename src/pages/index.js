import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';

import MainLayout from '../components/mainLayout';
import Nav from '../components/nav/nav';
import SEO from '../components/seo';

import '../styles/app.css';
import MailIcon from '../images/assets/mail';
import PhoneIcon from '../images/assets/phone';
import LocationIcon from '../images/assets/location';
import * as s from './index.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {

  const graphicRef = useRef(null);

  useEffect(() => {
    const landingTrigger = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: graphicRef.current,
          start: "top" + graphicRef.current.offsetTop,
          end: "100% 0",
          scrub: true,
        //   markers: true
        }
      })

      tl.to(graphicRef.current, { backgroundPositionY: 20 });

      return tl;
    }

    landingTrigger();

  }, [])

  return (
      <MainLayout>
          <SEO 
              title="Polerowanie Aluminium - Piaskowanie i Szkiełkowanie Warszawa"
          />
          <header className={s.header} ref={graphicRef}>
            <div className={s.overlay}>
                <div className="container">
                    <div className={s.heading}>
                        <h1>Polerowanie Wibracyjne Aluminium. Piaskowanie i Szkiełkowanie
                            <span>
                                PolerowanieAL - Zajmujemy się polerowaniem aluminium, stopów aluminium, stali kwasowej i nierdzewnej i wiele więcej...
                            </span>
                        </h1>
                        <div className={s.actions}>
                            <Link to="kontakt" className="btn btnPrimary">Skontaktuj się</Link>
                            <Link to="kontakt" className="btn btnWhite">Nasza oferta</Link>
                        </div>
                    </div>
                </div>
                <div className={s.bottomBar}>
                    <div className="container">
                        <ul>
                            <li>
                                <PhoneIcon/>
                                <div>
                                    <span>Numer telefonu:</span>
                                    <a href="tel:512 542 024">+48 512 542 024</a>
                                </div>
                            </li>
                            <li>
                                <MailIcon/>
                                <div>
                                    <span>Adres Email:</span>
                                    <a href="mailto:polerowanieal@gmail.com">polerowanieal@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <LocationIcon/>
                                <div>
                                    <span>Lokalizacja:</span>
                                    <a href="mailto:polerowanieal@gmail.com">Szawelska 35, 03-107 Warszawa</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className={s.infoWrapper}>
              <div className="container">
                <div className={s.box}>
                <h1>Polerowanie Wibracyjne Aluminium</h1>
                <a href="/kontakt" class="btn btnPrimary">Skontaktuj się</a>
                </div>
              </div>
            </div>
            <div className={s.graphic} ref={graphicRef}>
              <div className={s.graphic__overlay}></div>
            </div> */}
          </header>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      </MainLayout>
  )
}

export default Landing;

