import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as s from './priceList.module.scss';

const PriceList = () => {
    
    const {
        allMarkdownRemark: { edges: prices }
    } = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/cennik/"}}) {
                edges {
                    node {
                        frontmatter {
                            name
                            min_price
                            max_price
                            quantity_type
                        }
                    }
                }
            }
        }
    `)

    const PricingTable = () => {
        
        let arr = [];

        prices.forEach(el => {
            arr.push(el.node.frontmatter);
        });

        arr.sort((a, b) => parseFloat(a.min_price) > parseFloat(b.min_price) ? 1 : -1);

        return (
            <table className={s.tab}>
                <thead>
                    <tr>
                        <th>Usługa</th>
                        <th>Koszt</th>
                        <th>Ilość</th>
                    </tr>
                </thead>
                <tbody>                    
                    { arr.map((val, key) => (
                        <tr key={key} className={s.item}>
                            <td className={s.name}>
                                {val.name}
                            </td>
                            <td className={s.price}>
                                {val.min_price} - {val.max_price} zł
                            </td>
                            <td className={s.quantity}>
                            {val.quantity_type === "sztuka" ? "szt." : val.quantity_type}
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        )
    }

    return (
        <div className={s.list}>
            <PricingTable/>
        </div>
    )
}

export default PriceList;