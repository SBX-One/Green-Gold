import Bar from "../../components/common/Bar";
import Menu from "../../components/layout/Menu";
import Data from "../../data/dummyData.json"
import { useTrash } from "../../context/TrashContext";
import ellipse from "../../assets/svg/ellipsis.svg"
import { useState } from "react";
import RigoButton from "../../components/ui/button/RigoButton";

export default function AddSaldo() {
    const usrName = Data.map((item) => item.nama);
    const { userInput, selectedMethod } = useTrash();
    const [amount, setAmount] = useState<string>("");
    const [saldoInput, setSaldoInput] = useState<number>(0);

    const numericValue = Number(amount.replace(/[^0-9]/g, ""));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (!value.startsWith("Rp ")) {
            value = "Rp " + value.replace(/[^0-9]/g, "");
        }
        const numberString = value.replace(/[^0-9]/g, "");
        if (numberString === "") {
            setAmount("Rp");
            return;
        }
        const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setAmount(`Rp ${formattedNumber}`);
        setSaldoInput(numericValue);
    };

    // Fungsi tambahan agar kursor selalu di akhir saat diklik
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const val = e.target.value;
        e.target.setSelectionRange(val.length, val.length);
    };

    return (
        <div className="px-5">
            <Menu back={-1} />
            <div className="mt-10">
                <Bar title={usrName} desc={userInput} iconL={selectedMethod} iconR={ellipse} iconRBorder={false} />
                <div>
                    <h1>Jumlah Transfer</h1>
                    <div className="relative flex items-center">
                        <input onFocus={handleFocus} type="text" onChange={handleChange} value={amount} className="py-13.25 border-2 border-border-default w-full rounded-2xl text-text-heading h1-heading text-center" />
                    </div>
                </div>
            </div>  
            <div className="absolute w-full px-5 left-0 bottom-20">
                <RigoButton inv={true} text="Transfer" />
            </div>
        </div>
    )
}