import Bar from "../../components/common/Bar";
import Menu from "../../components/layout/Menu";
import Data from "../../data/dummyData.json"
import { useTrash } from "../../context/TrashContext";
import ellipse from "../../assets/svg/ellipsis.svg"
import { useState } from "react";
import RigoButton from "../../components/ui/button/RigoButton";
import { useNavigate } from "react-router-dom";

export default function AddSaldo() {
    const usrName = Data.map((item) => item.nama);
    const { userInput, selectedMethod, amount, setAmount } = useTrash();
    const [saldoInput, setSaldoInput] = useState<number>(0);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (!value.startsWith("Rp ")) {
            value = "Rp " + value.replace(/[^0-9]/g, "");
        }
        const numberString = value.replace(/[^0-9]/g, "");
        if (numberString === "") {
            setAmount("Rp");
            setSaldoInput(0);
            return;
        }
        const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setAmount(`Rp ${formattedNumber}`);
        setSaldoInput(Number(numberString));
    };
    
    const handleTransfer = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/addSaldo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: saldoInput }),
            });
            const data = await response.json();
            if (data.success) {
                alert(`Saldo berhasil ditambahkan. Saldo baru: Rp ${data.newSaldo.toLocaleString()}`);
            } else {
                alert('Gagal menambahkan saldo');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan');
        }
        navigate('/Saldo/AddSaldo/Receipt');
    };

    return (
        <div className="px-5">
            <Menu back={-1} />
            <div className="mt-10">
                <Bar title={usrName} desc={userInput} iconL={selectedMethod} iconR={ellipse} iconRBorder={false} />
                <div>
                    <h1>Jumlah Transfer</h1>
                    <div className="relative flex items-center">
                        <input type="text" onChange={handleChange} value={amount} className="py-13.25 border-2 border-border-default w-full rounded-2xl text-text-heading h1-heading text-center" />
                    </div>
                </div>
            </div>  
            <div className="absolute w-full px-5 left-0 bottom-20">
                <RigoButton inv={true} text="Transfer" onClick={handleTransfer} />
            </div>
        </div>
    )
}