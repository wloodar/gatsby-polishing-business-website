import React from 'react'
import { Link } from 'gatsby';
import * as s from './404.module.scss';

import MainLayout from '../components/mainLayout';

const NotFoundPage = () => {
    return (
        <MainLayout>
            <div className="navMargin">
                <div className="container">
                    <div className={s.box}>
                        <div className="boxhead">
                            <h2>Strona o podanym adresie nie istnieje :(</h2>
                        </div>
                        <div className="bsP">
                            <p>Niestety strona o podanym przez Ciebie adresie nie istnieje lub została usunięta.</p>
                        </div>
                        <Link to="/" className="btn btnPrimary">Strona główna</Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default NotFoundPage
