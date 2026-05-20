import SimpleCard from "../../components/common/SimpleCard"
import RigoButton from "../../components/ui/button/RigoButton";
import { useTrash } from "../../context/TrashContext"

export default function IsiSampah() {
    const { selectedTrash, updateTrashQuantity, removeFromTrash, handleCariJemput } = useTrash();

    return (
        <div>
            <div className="flex flex-row justify-between items-center mt-8">
                <h1 className="sm-semibold text-text-heading">Isi Sampah</h1>
                <div>
                    <h1 className="label-default text-text-error"> Min. 25 Kg</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 mt-5 mb-3">
                {selectedTrash.map((item, i) => (
                    <div key={i}>
                        <SimpleCard 
                            title={item.name}
                            desc={`Rp. ${item.harga}/kg`}
                            numSampah={item.quantity}
                            setNumSampah={(updater) => {
                                const newQty = updater(item.quantity);
                                if (newQty === 0) {
                                    removeFromTrash(item.name);
                                } else {
                                    updateTrashQuantity(item.name, newQty);
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="sticky w-fit ml-auto bottom-5 md:hidden">
                <RigoButton text="Cari Penjemput" inv={true} onClick={() => handleCariJemput()} />
            </div>
        </div>
    )
}