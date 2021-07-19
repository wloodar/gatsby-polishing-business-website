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
                description='Zobacz efekty naszych działań - Galeria | PolerowanieAL - Polerowanie wibracyjne i roto-wibracyjne części do motocykli zabytkowych jak i współczesnych, felg aluminiowych do samochodów osobowych oraz ciężarowych do 24".'
            />

            <div className={s.gallery}>
                {images.map(({ node }, key) => (
                    <GatsbyImage image={getImage(node.childImageSharp)} alt={node.name} key={key}/>
                ))}
                {images.map(({ node }, key) => (
                    <GatsbyImage image={getImage(node.childImageSharp)} alt={node.name} key={key}/>
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
                    name
                }
            }
        }
    }
`