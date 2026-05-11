import Navbar from "../components/layout/Navbar"
import Balance from "../view/Home/Balance"

export default function Home() {
    return (
        <div className="px-5">
            <Navbar mode="home"/>
            <Balance />            
        </div>
    )
}