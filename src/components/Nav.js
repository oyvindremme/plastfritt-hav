import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo/plastfritt_hav-hori_logo.png" }) {
                childImageSharp {
                    fixed(height: 120) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <nav className="navigation">
            <div className="container">
                <div className="navigation__logo">
                    <Link to="/">
                        <Img fixed={data.logo.childImageSharp.fixed} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav