import React, { useEffect, useRef } from 'react';

import MainLayout from '../components/mainLayout';
import Nav from '../components/nav/nav';
import SEO from '../components/seo';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/app.css';
import * as s from './index.module.scss';

const Landing = () => {

  const graphicRef = useRef(null);

  useEffect(() => {
    const landingTrigger = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: graphicRef.current,
          start: "top top",
          pin: true,
          scrub: true,
          markers: true
        }
      })

      tl.to(graphicRef.current, { backgroundPositionY: 1000 });

      return tl;
    }

    const master = gsap.timeline();
    
    master.add(landingTrigger);

  }, [])

  return (
      <MainLayout>
          <SEO 
              title="Polerowanie Aluminium - Piaskowanie i Szkiełkowanie Warszawa"
          />
          <Nav/>
          <header className={s.header}>
            <div className={s.infoWrapper}>
              <div className={s.box}>

              </div>
            </div>
            <div className={s.graphic}>
              <div className={s.graphic__overlay}></div>
            </div>
          </header>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      </MainLayout>
  )
}

export default Landing;

