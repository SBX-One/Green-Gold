import Menu from "../../components/layout/Menu";
import RigoButton from "../../components/ui/button/RigoButton";
import { useTrash } from "../../context/TrashContext"
import creditCard from '../../assets/svg/credit-card.svg'
import { useState } from "react";
import Bar from "../../components/common/Bar";
import userData from "../../data/dummyData.json";
import ellipse from "../../assets/svg/ellipsis.svg"
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

export default function VerificationCard() {
    const { selectedMethod, userInput, setUserInput } = useTrash();
    const [clickVerfikasi, setClickVerfikasi] = useState<boolean>(false);
    const userName = userData.map(item => item.nama);
    const navigate = useNavigate();

    function handleVerfication() {
        if (!userInput) {
            alert("isi nomor akun");
        } else {
            setClickVerfikasi(true);
        }
    }

    const handleChoseAccount = async () => {
        const saltRound = 10;
        const hash = await bcrypt.hash(userInput, saltRound);
        const safeHash = encodeURIComponent(hash);

        navigate(`/Saldo/addSaldo/${safeHash}`)
    }

    return (
        <div className="px-5">
            <Menu back="/Saldo" />
            <div className="mt-10">
                <h1 className="sm-semibold text-text-label">Nomor Akun</h1>

                <div className="flex flex-row gap-3 mt-4">
                    <input onChange={((e) => setUserInput(e.target.value))} type="text" placeholder="Nomor akun" className="w-2/1 border-2 border-border-default text-text-body rounded-2xl px-3" />
                    <RigoButton inv={true} text="Verfikasi" icon={false} onClick={handleVerfication} disabled={clickVerfikasi} />
                </div>
            </div>
            <div className="mt-10">
                {clickVerfikasi ? (
                    <div className="relative" onClick={handleChoseAccount}>
                        <img src={selectedMethod} className="absolute left-5 top-5" />
                        <Bar title={userName[0]} desc={userInput} iconL={selectedMethod} iconLBorder={false} iconR={ellipse} iconRBorder={false} />
                    </div>
                ): (
                    <div className="py-13.25 mt-10 flex flex-col border-2 border-border-default rounded-2xl">
                        <img src={creditCard} alt="credit card" className="h-12" />
                        <h1 className="text-center label-default text-text-placeholder">Text Placeholder</h1>
                    </div>
                )}
            </div>
            <div className="absolute bottom-10 w-full px-5 left-0"> 
                <RigoButton text="Lanjut" inv={true} disabled={!clickVerfikasi} />
            </div>
        </div> 
    )
}