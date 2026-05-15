import Menu from "../components/layout/Menu";
import Data from "../data/dummyData.json"
import CardViewer from "../view/Saldo/CardViewer";

export default function Saldo() {
    const saldo = Data.map(item => item.saldo).toLocaleString('id-ID')
    console.log(saldo)
    return (
        <div>
            <Menu back="/Home" TotalHarga={saldo} />
            <CardViewer />
        </div>
    )
}