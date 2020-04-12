import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImageGallery = () => {

    const data = useStaticQuery(graphql`
        {
            allFile(filter: {relativeDirectory: {eq: "image-gallery"}}) {
                edges {
                    node {
                        childImageSharp {
                            fixed(width: 150, height: 150) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <section className="image-gallery">
            <div className="container padding-bottom">
                <h2>
                    Et hav uten plast og søppel
                </h2>
                <div className="image-gallery__images">
                    {data.allFile.edges.map(image => (
                        <Img className="image-gallery__images__image" fixed={image.node.childImageSharp.fixed} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ImageGallery