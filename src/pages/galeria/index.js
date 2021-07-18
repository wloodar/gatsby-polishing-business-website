import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';
import * as s from './gallery.module.scss';

import MainLayout from '../../components/mainLayout';
import OffersCarousel from '../../components/offersCarousel/offersCarousel';
import BottomBar from '../../components/bottomBar/bottomBar';

const Gallery = ({ data }) => {
    
    const {
        allFile: { edges: images }
    } = data;
    
    return (
        <MainLayout>
            <SEO
                title="Efekty Polerowania - Piaskowania & Szkiełkowania | PolerowanieAL"
            />

            <div className={s.gallery}>
                {images.map(({ id, node }) => (
                    <GatsbyImage image={getImage(node)}/>
                ))}
                {images.map(({ id, node }) => (
                    <GatsbyImage image={getImage(node)}/>
                ))}
            </div>

            <div className="row">
                <OffersCarousel/>
            </div>

            <BottomBar/>
        </MainLayout>
    )
}

export default Gallery

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "galleryimages"}}) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
`