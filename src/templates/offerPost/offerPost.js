import React from 'react';
import { graphql, Link } from 'gatsby';
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

    return (
        <MainLayout>
            <header className={s.header} style={{ background: 'url(' + offerData.hero_pic.publicURL + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                                <Link to="/kontakt" className="btn btnPrimary">Jestem zainteresowany</Link>
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
                    publicURL
                }
            }
        }
    }
`