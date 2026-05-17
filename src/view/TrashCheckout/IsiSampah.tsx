import SimpleCard from "../../components/common/SimpleCard"
import RigoButton from "../../components/ui/button/RigoButton";
import { useTrash } from "../../context/TrashContext"
import { useHandleSetNum } from "../../type/handleSetNumt";

export default function IsiSampah() {
    const { numSampah, handleCariJemput } = useTrash();
    const handleSetNum = useHandleSetNum();

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

    // Hitung total kg
    // const totalKg = numSampah.reduce((acc, val) => acc + val, 0);

    return (
        <div>
            <div className="flex flex-row justify-between items-center mt-8">
                <h1 className="sm-semibold text-text-heading">Isi Sampah</h1>
                <div>
                    <h1 className="label-default text-text-error"> Min. 25 Kg</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 mt-5 mb-3">
                {SampahUmumList.map((item, i) => (
                    <div key={i}>
                        <SimpleCard {...item} numSampah={numSampah[i]} setNumSampah={handleSetNum(i)} />
                    </div>
                ))}
            </div>
            <div className="sticky w-fit ml-auto bottom-5 md:hidden">
                <RigoButton text="Cari Penjemput" inv={true} onClick={() => handleCariJemput()} />
            </div>
        </div>
    )
}