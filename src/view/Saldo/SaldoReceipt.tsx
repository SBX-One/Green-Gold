import Bar from "../../components/common/Bar";
import Menu from "../../components/layout/Menu";
import { useTrash } from "../../context/TrashContext";
import Data from "../../data/dummyData.json"
import { useNavigate } from "react-router-dom";
import ellipse from "../../assets/svg/ellipsis.svg"
import RigoButton from "../../components/ui/button/RigoButton";

export default function SaldoReceipt() {
    const { userInput, selectedMethod, amount } = useTrash();
    const userName = Data.map((item) => item.nama);
    const navigate =  useNavigate();
    
    function handleFinishReceipt() {
        navigate('/Home');
    }

    console.log(amount)

    return (
        <div className="px-5">
            <Menu back={-1} onclick={handleFinishReceipt} />
            <div className="mt-10">
                <Bar title={userName} desc={userInput} iconR={ellipse} iconL={selectedMethod} iconRBorder={false} />
            </div>

            <div>
                <h1 className="xs-default text-text-placeholder mb-4 mt-5">Detail Pembayaran: </h1>
                <div className="sm-semibold text-text-body font-bold flex-col gap-y-2">
                    <div className="flex flex-row justify-between">
                        <h1>Jumlah transfer</h1>
                        <p>{amount}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h1>Pajak admin</h1>
                        <p>Free</p>
                    </div>
                </div>
                <div className="sm-semibold text-text-body font-bold flex flex-row justify-between pt-3 border-t-2 border-border-default mt-4">
                    <h1>Total: </h1>
                    <p>{amount}</p>
                </div>
            </div>
            <div className="absolute bottom-10 md:hidden block ">
                <RigoButton text="Lanjut" inv={true} onClick={handleFinishReceipt} />
            </div>
        </div>
    )
}