import React from 'react';
import cs from 'classnames';
import SEO from '../../components/seo';
import * as s from './pricing.module.scss';

import MainLayout from '../../components/mainLayout';
import PriceList from '../../components/priceList/priceList';

const Pricing = () => {

    return (
        <MainLayout>
            <SEO
                title="Cennik Polerowania Aluminium | PolerowanieAL"
            />
            <div className="navMargin">
                <div className={cs("container", s.wrapper)}>
                    <div className="boxhead">
                        <h1>Cennik w PolerowanieAL</h1>
                    </div>
                    <div className={s.subtitle}>
                        <p>"Ceny usług w dużej mierze zależą od stanu materiału który obrabiamy oraz przygotowania przez klienta."</p>
                    </div>
                    <div className={cs(s.desc, "bsP")}>
                        <p>Jeżeli elementy są wyszkiełkowane i nie mają głębokich rys ani wżerów bierzemy pod uwagę najniższą cenę. Jeśli materiał ma głębokie rysy i wżery musi zostać przygotowany ręcznie po czym długo musi pracować w maszynie. Poniżej ceny usług polerowania, dokładnej wyceny dokonujemy mając materiał obrabiany u siebie na miejscu.</p>
                    </div>
                    <div className={s.priceList}>
                        <PriceList/>    
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Pricing;

