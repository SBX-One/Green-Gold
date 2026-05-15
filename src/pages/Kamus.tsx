import Footer from "../components/layout/footer";
import Navbar from "../components/layout/Navbar";
import Balance from "../view/Home/Balance";

export default function Kamus() {
    return (
        <div className="px-5">
            <Navbar mode="home" />
            <Balance />
            <Footer />
        </div>
    )
}