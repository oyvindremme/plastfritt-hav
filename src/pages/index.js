import React from "react"

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

const Hjem = ({ data }) => {
    return (
        <>
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