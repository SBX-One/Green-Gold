import Navbar from "../components/Navbar"
import PageHeading from "../view/HomePage/PageHeading"
import BannerPartner from "../view/HomePage/BannerPartner"
import WhatWeSolve from "../view/HomePage/WhatWeSolve"
import HowWeSolve from "../view/HomePage/HowWeSolve"
import GrigoFoundation from "../view/HomePage/GrigoFoundation"
import FAQ from "../view/HomePage/FAQ"
// import Seperator from "../components/seperator"
import Footer from "../components/footer"

export default function HomePages() {
    return (
        <div className="bg-neutral-white px-5 md:px-15 desktop:px-30">
            <Navbar />
            <PageHeading />
            <BannerPartner />
            <WhatWeSolve />
            <HowWeSolve />
            <GrigoFoundation />
            <FAQ />
            <Footer />
            {/* <h1>Home Pages</h1> */}
        </div>
    )
} 