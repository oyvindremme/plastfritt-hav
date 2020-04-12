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
        <section className="contact-information">
            <div className="container">
                <h2>Kontakt</h2>
                <p style={{marginBottom: "2.5rem"}}>Ta kontakt, vi svarer gjerne på spørsmål eller andre henvendelser.</p>
                <p style={{marginBottom: "1.2rem"}}>
                    <span className="contact-information__icon">
                        <Img fixed={data.phone.childImageSharp.fixed} />
                    </span> 930 46 201
                </p>
                <p>
                    <span className="contact-information__icon">
                        <Img fixed={data.email.childImageSharp.fixed} />
                    </span> plastfrittgiske@gmail.com
                </p>
            </div>
        </section>
    )
}

export default ContactInformation