import Navbar from "../components/Navbar"
import PageHeading from "../view/HomePage/PageHeading"
import BannerPartner from "../view/HomePage/BannerPartner"
import WhatWeSolve from "../view/HomePage/WhatWeSolve"
import HowWeSolve from "../view/HomePage/HowWeSolve"
import GrigoFoundation from "../view/HomePage/GrigoFoundation"
import FAQ from "../view/HomePage/FAQ"

export default function HomePages() {
    return (
        <div className="bg-neutral-white px-5">
            <Navbar />
            <PageHeading />
            <BannerPartner />
            <WhatWeSolve />
            <HowWeSolve />
            <GrigoFoundation />
            <FAQ />
            {/* <h1>Home Pages</h1> */}
        </div>
    )
} 