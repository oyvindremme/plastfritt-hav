import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
    <StaticQuery
        query={graphql`
        query {
            file(relativePath: { eq: "logo/plastfritt_hav-hori_logo.png" }) {
                childImageSharp {
                    fixed(height: 45) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
        `}
        render={data => (
            <nav className="navigation">
                <div className="navigation__logo">
                    <Link to="/">
                        <Img fixed={data.file.childImageSharp.fixed} />
                    </Link>
                </div>
            </nav>
        )}
    />
)