import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Header = () => (
    <StaticQuery
        query={graphql`
            query {
                headerBackgroundImage: file(relativePath: { eq: "header_img.jpg" }) {
                childImageSharp {
                    fluid(quality: 80, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
            }
        `}
        render={data => {
            return (
                <BackgroundImage
                    tag="header"
                    className="front-header"
                    fluid={data.headerBackgroundImage.childImageSharp.fluid}
                    backgroundColor="#333333"
                >
                    <h1 className="front-header__title">Bli med på laget</h1>
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
        }}
    />
)

export default Header