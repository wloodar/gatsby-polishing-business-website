import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as s from './offers.module.scss';

import MainLayout from '../../components/mainLayout';
import BottomBar from '../../components/bottomBar/bottomBar';

const Offer = ({ data }) => {

    const {
        allMarkdownRemark: { edges: offers }
    } = data;

    console.log(offers);

    const OffersList = () => {
        
        let offersArr = [];

        offers.forEach(el => {
            let offerObj = {};
            const { node } = el;

            offerObj.slug = node.fields.slug;
            offerObj = { ...offerObj, ...node.frontmatter }

            offersArr.push(offerObj);
        });

        return (
            <div className={s.list}>
                {offersArr.map((val) => (
                    <div className={s.item}>
                        <div className={s.info}>
                            <h2>{val.title}</h2>
                            <div className={s.subtitle}>
                                <div className="bsP">
                                    <p>{val.subtitle}</p>
                                </div>
                            </div>
                            <Link to={val.slug} className="btn btnPrimary">Dowiedz się więcej {">"}</Link>
                        </div>
                        <div className={s.pic}>
                            <GatsbyImage image={getImage(val.hero_pic)} alt={val.title}/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <MainLayout>
            <div className={s.wrapper}>
                <div className="container">
                    <div className="navMargin">
                        <div className="boxhead">
                            <h1>Nasza oferta</h1>
                        </div>
                        <OffersList/>
                    </div>
                </div>
            </div>
            <BottomBar/>
        </MainLayout>
    )
}

export default Offer;

export const query = graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(oferta)/"}}) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        subtitle
                        hero_pic {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 70)
                            }
                        }
                    }
                }
            }
        }
    }
`