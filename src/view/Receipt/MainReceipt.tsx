import SimpleTinyPill from "../../components/common/SimpleTinyPill";
import smartphone from "../../assets/svg/smartphone.svg";
import ScanBarcode from "../../components/ui/icons/ScanBarcode";
import { useTrash } from "../../context/TrashContext";
import { QRCodeSVG } from "qrcode.react";

export default function MainReceipt() {
    const { selectedTrash, numSampah } = useTrash();

    const TinyPillList = [
        {
            text: "Siapkan barcode anda",
            icon: smartphone
        },
        {
            text: "Biarkan penjemput scan",
            icon: <ScanBarcode className="text-text-body" />
        },
    ]

    const totalSsampah = numSampah.reduce((acc, val) => acc + val, 0);

    return (
        <div className="border-2 border-border-default mt-10 font-bold rounded-3xl mb-30">
            <div className="flex flex-col md:flex-row md:justify-center items-center py-5 relative  border-b-2 border-border-default gap-3">
                <hr className="border-2 border-surface-primary w-4 md:w-6 absolute top-1/2 rotate-90 md:rotate-0 z-0" />
                {TinyPillList.map((item, i) => (
                    <div key={i} className="relative z-20">
                        <SimpleTinyPill {...item} />
                    </div>
                ))}
            </div>
            <div className="p-5 md:pt-10 md:p-14 pb-10 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <h3 className="xs-default text-text-placeholder">Trash :</h3>
                    <div className="mt-3 ">
                        {/* Method 1: Using map */}
                        {selectedTrash.map((item, i) => (
                            <div key={i} className="flex justify-between py-1">
                                <span className="sm-semibold text-text-body">{item.name}</span>
                                <span className="sm-semibold text-text-body">{item.quantity} kg</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between pt-3 border-t-2 border-border-default mt-4 -mx-5 px-5 pb-10">
                        <h1>Total:</h1>
                        <div className="flex flex-row-reverse">
                            <p>{totalSsampah}Kg + {selectedTrash.length} Pcs</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center border-t-2 md:border-0 border-border-default -mx-5 pt-5">
                    <QRCodeSVG value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" size={125} bgColor="#ffffff" fgColor="#000000" level="M" />
                    <p className="label-default text-text-placeholder font-normal mt-4">Tap to full QR</p>
                </div>
            </div>
        </div>
    )
}
