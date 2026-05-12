import { useState } from "react"
import Tabs from "../../components/ui/button/Tabs";
import barcodeIcon from "../../assets/svg/fi_Barcode.svg"
import RigoButton from "../../components/ui/button/RigoButton";

export default function ScanMeth() {
    const [currentMode, setCurrentMode] = useState<boolean>(true);

    return (
        <div className="text-text-body">
            <div className="sm-semibold text-text-body flex flex-row items-center justify-between mt-8">
                <h1 className="">Sampah Khusus</h1>
                <Tabs setCurrentMode={setCurrentMode} currentMode={currentMode} />
            </div>
            {currentMode ? (
                <div className="py-13.25 w-full relative bg-surface-default border-2 border-border-default flex justify-center items-center gap-2 rounded-2xl mt-5 flex-col">
                    <img src={barcodeIcon} alt="barcode" className="w-12" />
                    <p className="label-default text-text-placasasqgeholder">Tambah Foto</p>
                </div>
            ): (
                <div>
                    <input type="text" className="bg-neutral-white w-full p-4 md-semibold rounded-2xl border-2 border-border-default focus:outline-0 text-text-body mt-5" placeholder="Input kode di sini" />
                </div>
            )}
                <div className="w-35 absolute right-5 bottom-11">
                    <RigoButton inv={true} text="Lanjut" />
                </div>
        </div>
    )
}