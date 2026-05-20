import Navbar from "../components/layout/Navbar"
import Balance from "../view/Home/Balance"
import Bantuan from "../view/Home/BantuanDanPanduan"
import ProductSampah from "../view/Home/ProductSampah"
import Footer from "../components/layout/footer"

import { useEffect } from "react"
import { useTrash } from "../context/TrashContext"

export default function Home() {
    const { resetTrash } = useTrash();

    useEffect(() => {
        resetTrash();
    }, [resetTrash]);

    return (
        <div className="px-5 md:px-10 flex flex-col">
            <Navbar mode="home"/>
            <Balance />
            <Bantuan />
            <ProductSampah />
            <Footer />
        </div>
    )
}