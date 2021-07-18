import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import cs from 'classnames';

import MainLayout from '../components/mainLayout';
import OffersCarousel from '../components/offersCarousel/offersCarousel';
import BottomBar from '../components/bottomBar/bottomBar';
import SEO from '../components/seo';

import '../styles/app.css';
import MailIcon from '../images/assets/mail';
import PhoneIcon from '../images/assets/phone';
import LocationIcon from '../images/assets/location';
import * as s from './index.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Landing = ({ data }) => {

  const { file: motorsPic } = data;
  const graphicRef = useRef(null);

  useEffect(() => {
    const landingTrigger = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: graphicRef.current,
          start: "top" + graphicRef.current.offsetTop,
          end: "100% 0",
          scrub: true,
        }
      })

      tl.to(graphicRef.current, { backgroundPositionY: 20 });

      return tl;
    }

    landingTrigger();

  }, [])

  console.log(motorsPic);

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
                        <Link to="/kontakt" className="btn btnPrimary">Skontaktuj się</Link>
                        <Link to="/oferta" className="btn btnWhite">Nasza oferta</Link>
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
                                <a href="https://www.google.com/maps/place/PolerowanieAL/@52.353361,20.9249543,15.07z/data=!4m5!3m4!1s0x471edbe52cbe67b7:0xd97052fca3e6b5fd!8m2!3d52.353318!4d20.9347112?hl=pl-PL">Szawelska 35, 03-107 Warszawa</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </header>
            
        <div className={cs(s.intro, "row")}>
            <div className="container">
                <div className="boxhead center">
                    <h2>Trochę o nas</h2>
                </div>
                <div className="bsP center">
                    <p>Nasza firma zajmuje się polerowaniem wibracyjnym i rotowibracyjnym elementów aluminiowych, stopów aluminium oraz stali nierdzewnej. Oprócz polerowania aluminium wykonujemy usługi piaskowania, szkiełkowania oraz sodowania, a także lakierujemy proszkowo elementy o długości do 160cm.</p>
                </div>
            </div>
        </div>

        <div className={cs(s.qualityLabel, "row")}>
            <div className={s.qualityLabel__overlay}>
                <div className="container">
                    <div className="boxhead center">
                        <h2>Naszą dewizą jest jakość i jeszcze raz jakość</h2>
                    </div>
                    <Link to="/galeria" className="btn btnBorder">Zobacz galerię</Link>
                </div>
            </div>
        </div>

        
        <div className={s.trust}>
            <div className="container">
                <div className={s.trust__pic}>
                    <GatsbyImage image={motorsPic.childImageSharp.gatsbyImageData}/>
                </div>
                <div className={s.trust__desc}>
                    <div className="boxhead">
                        <h2>Od ponad 20 lat wykonujemy renowację zabytkowych motocykli</h2>
                    </div>
                    <dib className="bsP">
                        <p>Pomagamy naszym klientom w pracach remontowych oraz doradzamy w zakresie prac z tym związanych. Od ponad 3 lat dodatkowo wykonujemy usługi polerowania na profesjonalnych maszynach wibracyjnych, które polerują aluminium kształtkami żywicznymi. Świadczymy usługi polerowania elementów motocyklowych jak obręcze kół, piasty, pokrywy piast, felgi motocyklowe, kartery silników, dekle silników, głowice, cylindry, oraz całe kompletne silniki.</p>
                    </dib>
                </div>
            </div>
        </div>

        <div className="row">
            <div className={s.offersCarousel}>
                <OffersCarousel/>
            </div>
        </div>

        <div className={cs(s.bottom, 'center')}>
            <BottomBar/>
        </div>
      </MainLayout>
  )
}

export default Landing;

export const query = graphql`
    query indexMotorsPic {
        file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "renowacja-zabytkowych-motocykli-1.jpg"}) {
            id
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`