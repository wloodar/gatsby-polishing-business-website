import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from '../../components/seo';
import * as s from './offerPost.module.scss';

import MainLayout from '../../components/mainLayout';
import BottomBar from '../../components/bottomBar/bottomBar';

const OfferPost = ({ data }) => {

    const {
        markdownRemark: { frontmatter: offerData }
    } = data;

    const {
        markdownRemark: { html: offerHtml }
    } = data;

    console.log(offerData.hero_pic);

    return (
        <MainLayout>
            <SEO
                title={offerData.title + " | PolerowanieAL"}
            />
            <header className={s.header}>
                <div className={s.header__image}>
                    <GatsbyImage image={getImage(offerData.hero_pic)}/>
                </div>
                <div className={s.header__overlay}>
                    <div className="container">
                        <div className={s.header__box}>
                            <h1>
                                {offerData.title}
                                <span>
                                    {offerData.subtitle}
                                </span>
                            </h1>
                            <div className={s.header__actions}>
                                <Link to="/kontakt" className="btn btnPrimary">Jestem zainteresowany / a</Link>
                                <Link to="/oferta" className="btn btnWhite">{"< Wróć do ofert"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className={s.content}>
                    <div dangerouslySetInnerHTML={{ __html: offerHtml }} />
                </div>
            </div>
            <BottomBar offerPage={true}/>
        </MainLayout>
    )
}

export default OfferPost

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                hero_pic {
                    sourceInstanceName
                    childImageSharp {
                        id
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
`