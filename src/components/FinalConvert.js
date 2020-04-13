import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const FinalConvert = () => {

    const data = useStaticQuery(graphql`
        query {
            headerBackgroundImage: file(relativePath: { eq: "backgrounds/final-convert.jpg" }) {
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
        className="final-convert"
        fluid={data.headerBackgroundImage.childImageSharp.fluid}
        backgroundColor="#333333">
            <div className="container padding-top padding-bottom">
                <h2 className="final-convert__title">Vi trenger din hjelp</h2>
                <p>La oss ta i et tak og gjøre verden til et rennere og mer miljøvennlig sted</p>
                <p>Hele organisasjonen er tuftet på frivillighet, «nærleiken og kjærleiken til havet», og vi setter stor pris på alle som vil bidra til å gjøre verden til et litt bedre sted for både mennesker, fugler og dyr.</p>
                <p>Så nøl ikke med å ta kontakt, sammen kan vi gjøre en forskjell <span role="img" aria-hidden="true">💚</span></p>
            </div>
        </BackgroundImage>
    )
}

export default FinalConvert