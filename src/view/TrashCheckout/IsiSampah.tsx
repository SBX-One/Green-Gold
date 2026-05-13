import SimpleCard from "../../components/common/SimpleCard"
import RigoButton from "../../components/ui/button/RigoButton";
import { useTrash } from "../../context/TrashContext"
import { useHandleSetNum } from "../../type/handleSetNumt";
import { useNavigate } from "react-router-dom";

export default function IsiSampah() {
    const { numSampah, setIsOrder } = useTrash();
    const handleSetNum = useHandleSetNum();
    const navigate = useNavigate();

    const SampahUmumList = [
        {
            title: "Plastik",
            desc: "Rp. 1000/kg",
            harga: 1000,
        },
        {
            title: "Kertas",
            desc: "Rp. 1000/kg",
            harga: 1000,
        },
        {
            title: "Kaleng Aluminium",
            desc: "Rp. 1000/kg",
            harga: 1000,
        }
    ]
    function handleCariJemput() {
        setIsOrder(true);
        navigate('/Home');

        console.log("back to home")
    }

    // Hitung total kg
    const totalKg = numSampah.reduce((acc, val) => acc + val, 0);

    return (
        <div>
            <div className="flex flex-row justify-between items-center mt-8">
                <h1 className="sm-semibold text-text-heading">Isi Sampah</h1>
                <div>
                    <h1 className="xs-semibold text-text-label py-3.5 px-6 border-2 border-border-default rounded-2xl">Total: {totalKg} Kg</h1>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between gap-y-3 mt-5 mb-3">
                {SampahUmumList.map((item, i) => (
                    <div key={i}>
                        <SimpleCard {...item} numSampah={numSampah[i]} setNumSampah={handleSetNum(i)} />
                    </div>
                ))}
            </div>
            <div className="sticky w-fit ml-auto bottom-5">
                <RigoButton text="Cari Penjemput" inv={true} onClick={() => handleCariJemput()} />
            </div>
        </div>
    )
}