import Navbar from "../components/layout/Navbar"
import Balance from "../view/MainShop/Balance"
import ProductSampah from "../view/MainShop/ProductSampah"
import Footer from "../components/layout/footer"

export default function MainShop() {
    return (
        <div className="px-5 md:px-10 flex flex-col">
            <Navbar mode="home"/>
            <Balance />
            <ProductSampah />
            <Footer />
        </div>
    )
}