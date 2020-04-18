import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ContactInformation = () => {

    const data = useStaticQuery(graphql`
        query {
            phone: file(relativePath: { eq: "icons/phone.png" }) {
                childImageSharp {
                    fixed(height: 128) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            email: file(relativePath: { eq: "icons/email.png" }) {
                childImageSharp {
                    fixed(height: 128) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <section id="kontakt" className="contact-information">
            <div className="container padding-top padding-bottom">
                <h2>Kontakt</h2>
                <p style={{marginBottom: "2.5rem"}}>Ta kontakt, vi svarer gjerne på spørsmål eller andre henvendelser.</p>
                <p style={{marginBottom: "1.2rem"}}>
                    <span className="contact-information__icon">
                        <Img fixed={data.phone.childImageSharp.fixed} />
                    </span> <a href="93046201">930 46 201</a>
                </p>
                <p>
                    <span className="contact-information__icon">
                        <Img fixed={data.email.childImageSharp.fixed} />
                    </span> <a href="plastfrittgiske@gmail.com" target="_blank" rel="noopener noreferrer">plastfrittgiske@gmail.com</a>
                </p>
            </div>
        </section>
    )
}

export default ContactInformation