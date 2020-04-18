import React from "react"

// React helmet
import { Helmet } from "react-helmet"

// Components
import Nav from "../components/Nav"
import Header from "../components/Header"
import OmOss from "../components/OmOss"
import ImageGallery from "../components/ImageGallery"
import FinalConvert from "../components/FinalConvert"
import ContactInformation from "../components/ContactInformation"
import Footer from "../components/Footer"

// Assets
import "../styles/main.scss"
import seoImage from "../images/seo/plastfritt-seo-img.png"

const Hjem = () => {
    return (
        <>
            <Helmet>
                <title>Plastfritt Hav | Bli med på laget</title>
                <meta name="title" content="Plastfritt Hav | Bli med på laget" />
                <meta name="description" content="Miljøengasjert organisasjon med kjærlighet for havet" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://plastfritthav.no/" />
                <meta property="og:title" content="Plastfritt Hav | Bli med på laget" />
                <meta property="og:description" content="Miljøengasjert organisasjon med kjærlighet for havet" />
                <meta property="og:image" content={`https://plastfritthav.no${seoImage}`} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://plastfritthav.no/" />
                <meta property="twitter:title" content="Plastfritt Hav | Bli med på laget" />
                <meta property="twitter:description" content="Miljøengasjert organisasjon med kjærlighet for havet" />
                <meta property="twitter:image" content={`https://plastfritthav.no${seoImage}`} />
            </Helmet>
            <Nav />
            <Header />
            <OmOss />
            <ImageGallery />
            <FinalConvert />
            <ContactInformation />
            <Footer />
        </>
    )
}

export default Hjem