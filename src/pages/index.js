import * as React from 'react';

import MainLayout from '../components/mainLayout';
import SEO from '../components/seo';

import '../styles/app.css';
import * as s from './index.module.scss';

const Landing = () => {

    return (
        <MainLayout>
            <SEO 
                title="Polerowanie Aluminium - Piaskowanie i Szkiełkowanie Warszawa"
            />

            <header className={s.header}>

            </header>

        </MainLayout>
    )
}

export default Landing;

