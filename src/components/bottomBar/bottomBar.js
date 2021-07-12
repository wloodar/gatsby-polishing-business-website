import React from 'react'
import { Link } from 'gatsby';
import * as s from './bottomBar.module.scss';

const BottomBar = ({ offerPage }) => {

    return (
        <div className={s.bar}>
            <div className="container">
                <div className="boxhead">
                    <h3>Zainteresowany? Masz pytanie?</h3>
                </div>
                <div className={s.actions}>
                    <Link to="/kontakt" className="btn btnPrimary">Skontaktuj się</Link>
                    
                    {offerPage ? <Link to="/oferta" className="btn btnDark">{"< Wróć do ofert"}</Link> : null }
                </div>
            </div>
        </div>
    )
}

export default BottomBar
