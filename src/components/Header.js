import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            headerBackgroundImage: file(relativePath: { eq: "backgrounds/header_img.jpg" }) {
                childImageSharp {
                    fluid(quality: 80, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <BackgroundImage
            tag="header"
            className="front-header container"
            fluid={data.headerBackgroundImage.childImageSharp.fluid}
            backgroundColor="#333333"
        >
            <h2 className="front-header__title">Bli med på laget</h2>
            <p className="front-header__sub-title">Ei fjøre uten plast</p>
            <p className="front-header__body-text">Miljøengasjert organisasjon med kjærlighet for havet</p>

            <a className="front-header__cta-primary" href="#" target="_blank">
                Registrer din aksjon
            </a>

            <a href="#kontakt" className="front-header__cta-secondary">
                Kontakt oss
            </a>
        </BackgroundImage>   
    )
}

export default Header