import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';
import * as s from './offers.module.scss';

import MainLayout from '../../components/mainLayout';
import BottomBar from '../../components/bottomBar/bottomBar';

const Offer = ({ data }) => {

    const {
        allMarkdownRemark: { edges: offers }
    } = data;

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
            <div>
                <SEO
                    title="Nasza Oferta Polerowania Aluminium | PolerowanieAL"
                    description='Sprawdź naszą ofertę | PolerowanieAL - Polerowanie wibracyjne i roto-wibracyjne części do motocykli zabytkowych jak i współczesnych, felg aluminiowych do samochodów osobowych oraz ciężarowych do 24".'
                />
                {offersArr.map((val, key) => (
                    <div className={s.item} key={key}>
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
                            <Link to={val.slug}>
                                <GatsbyImage image={getImage(val.hero_pic)} alt={val.title}/>
                            </Link>
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