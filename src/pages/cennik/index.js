import React from 'react';
import * as s from './pricing.module.scss';

import MainLayout from '../../components/mainLayout';
import PriceList from '../../components/priceList/priceList';

const Pricing = () => {

    return (
        <MainLayout>
            <div className="navMargin">
                <div className="container">
                    <PriceList/>    
                </div>
            </div>
        </MainLayout>
    )
}

export default Pricing;

