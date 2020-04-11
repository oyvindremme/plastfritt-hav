import React from "react"

// Components
import Nav from "../components/Nav"
import Header from "../components/Header"
import OmOss from "../components/OmOss"
import ImageGallery from "../components/ImageGallery"

// Assets
import "../styles/main.scss"

const Hjem = ({ data }) => {
    return (
        <>
            <Nav />
            <Header />
            <OmOss />
            <ImageGallery />
            <section className="final-convert">
                <h2 className="final-convert__title">Vi trenger din hjelp</h2>
                <p>La oss ta i et tak og gjøre verden til et rennere og mer miljøvennlig sted</p>
                <p>Hele organisasjonen er tuftet på frivillighet, «nærleiken og kjærleiken til havet», og vi setter stor pris på alle som vil bidra til å gjøre verden til et litt bedre sted for både mennesker, fugler og dyr.</p>
                <p>Så nøl ikke med å ta kontakt, sammen kan vi gjøre en forskjell 💚</p>
            </section>
        </>
    )
}

export default Hjem