import React from 'react';
import { graphql } from 'gatsby';

import * as s from './priceList.module.scss';

const PriceList = (data) => {
    
    // const {
    //     allMarkdownRemark: { edges: prices }
    // } = data;

    console.log(data);

    const PricingTable = () => {
        
        return (
            <p>d</p>
        )
        // let arr = [];

        // prices.forEach(el => {
        //     arr.push(el.node.frontmatter);
        // });

        // return (
        //     <ul>
        //         { arr.map((val, key) => (
        //             <li key={key}>
        //                 {val.name}
        //             </li>
        //         )) }
        //     </ul>
        // )
    }

    return (
        <div className={s.list}>
            <PricingTable/>
        </div>
    )
}

export default PriceList;

export const query = graphql`
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
`