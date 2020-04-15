import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            headerBackgroundImage: file(relativePath: { eq: "backgrounds/header_img.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <BackgroundImage
            tag="header"
            className="front-header"
            fluid={data.headerBackgroundImage.childImageSharp.fluid}
            backgroundColor="#333333"
        >
            <div className="container">
                <h2 className="front-header__title">Bli med på laget</h2>
                <p className="front-header__sub-title">Ei fjøre uten plast</p>
                <p className="front-header__body-text">Miljøengasjert organisasjon med kjærlighet for havet</p>

                <a className="button front-header__cta-primary" href="#kontakt">
                    Kontakt oss
                </a>

                <a href="https://www.facebook.com/plastfritt" target="_blank" rel="noopener noreferrer" className="button front-header__cta-secondary">
                    Facebook
                </a>
            </div>
        </BackgroundImage>   
    )
}

export default Header