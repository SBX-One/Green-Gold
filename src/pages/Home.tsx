import Navbar from "../components/layout/Navbar"
import Balance from "../view/Home/Balance"
import Bantuan from "../view/Home/BantuanDanPanduan"
import ProductSampah from "../view/Home/ProductSampah"
import Footer from "../components/layout/footer"

export default function Home() {
    return (
        <div className="px-5 flex flex-col">
            <Navbar mode="home"/>
            <Balance />
            <Bantuan />
            <ProductSampah />
            <Footer />
        </div>
    )
}