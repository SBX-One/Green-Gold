import Search  from "../../components/common/Search"
import BalanceViewer from "../../components/common/BalanceViewer"
import SimpleButton from "../../components/ui/button/SimpleButton"
import arrowUpDown from "../../assets/svg/arrow-up-down.svg"
import shoppingCart from '../../assets/svg/shopping-cart-green.svg'
import { useNavigate } from "react-router-dom"

export default function Balance() {
    const navigate = useNavigate();

    const SimpleButtonList = [
        {
            text : "Transfer",
            icon : arrowUpDown,
            onClick : () => navigate("/ScanYourTrash")
        },
        {
            text : "Shop",
            icon : shoppingCart,
            onClick : () => console.log("Transfer clicked")
        },
    ]

    return (
        <div className="pt-5 pb-15 border-b-2 border-border-default mt-10 w-screen px-5 left-0 ml-[calc(50%-50vw)]">
            <div className="flex flex-col gap-5">
                <Search />
                <BalanceViewer />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
                {SimpleButtonList.map((button, i) => (
                    <SimpleButton key={i} {...button} />
                ))}
            </div>
        </div>
    )
}