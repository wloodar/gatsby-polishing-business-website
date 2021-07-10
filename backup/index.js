import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import MainLayout from '../components/mainLayout';
import Nav from '../components/nav/nav';
import SEO from '../components/seo';

import '../styles/app.css';
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
          markers: true
        }
      })

      tl.to(graphicRef.current, { backgroundPositionY: 30 });

      return tl;
    }

    landingTrigger();

  }, [])

  return (
      <MainLayout>
          <SEO 
              title="Polerowanie Aluminium - Piaskowanie i Szkiełkowanie Warszawa"
          />
          <Nav/>
          <header className={s.header}>
            <div className={s.infoWrapper}>
              <div className="container">
                <div className={s.box}>
                <h1>Polerowanie Wibracyjne Aluminium</h1>
                <a href="/kontakt" class="btn btnPrimary">Skontaktuj się</a>
                </div>
              </div>
            </div>
            <div className={s.graphic} ref={graphicRef}>
              <div className={s.graphic__overlay}></div>
            </div>
          </header>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      </MainLayout>
  )
}

export default Landing;

