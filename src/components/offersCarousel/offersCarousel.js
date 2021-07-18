import React, { useRef, useEffect, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import cs from 'classnames';
import * as s from './offersCarousel.module.scss';

const OffersCarousel = () => {

    const {
        allMarkdownRemark: { edges: offers }
    } = useStaticQuery(graphql`
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
                                publish_date
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
        `);

    const [imagesHeight, setImagesHeight] = useState('');
    const [offersArrLength, setOffersArrLength] = useState(0);
    const imagesRef = useRef(null);

    useEffect(() => {
        const setProperImagesHeight = () => {
            if (window.innerWidth < 768 && window.innerWidth > 480) {
                setImagesHeight('auto');
            } else {
                setImagesHeight(imagesRef.current.clientWidth);
            } 
        }

        setProperImagesHeight();

        const resizeListener = () => {
            setProperImagesHeight();
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    const OffersList = () => {
        
        let offersArr = [];

        offers.forEach(el => {
            let offerObj = {};
            const { node } = el;

            offerObj.slug = node.fields.slug;
            offerObj = { ...offerObj, ...node.frontmatter }

            offersArr.push(offerObj);
        });

        setOffersArrLength(offersArr.length);

        offersArr.sort((a, b) => a.publish_date < b.publish_date ? 1 : -1);

        offersArr = offersArr.slice(0, 3);

        return (
            <div className={s.grid}>
                {offersArr.map((val, key) => (
                    <div className={s.item} key={key}>
                        <Link to={val.slug}>
                            <div className={s.image} ref={imagesRef} style={{ height: imagesHeight + "px" }}>
                                <GatsbyImage image={getImage(val.hero_pic)} style={{ height: '100%', maxHeight: '100%' }} imgStyle={{ objectFit: 'cover' }}/>
                                <div className={s.overlay}>
                                    <div className={s.box}>
                                        <h2>{val.title}</h2>
                                        <div className={s.subtitle}>
                                            <p>{val.subtitle}</p>
                                        </div>
                                        <Link to={val.slug} className="btn btnPrimary">Dowiedz się więcej {">"}</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    const ShowMoreOffers = () => (
        <Link to="/oferta" className={cs("btn btnDark", s.showMoreBtn)}>
            Zobacz naszą całą ofertę {">"}
        </Link>
    );

    return (
        <div className="container">
            <div className="boxhead">
                <h3>Nasza oferta</h3>
            </div>
            <OffersList/>
            {offersArrLength > 3 ? <ShowMoreOffers/> : null }
        </div>        
    );
};

export default OffersCarousel;