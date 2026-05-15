import CallendarIcon from "../../components/ui/icons/CallendarIcon"
import { useState } from "react"

interface WaktuItem {
    title: string,
    desc: string,
    time: string
}

export default function WaktuJemput() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [waktuChosen, setWaktuChosen] = useState<WaktuItem | null>(null);


    const WaktuList = [
        {
            title: "Cari Secepatnya",
            desc: "Min. 25KG",
            time: "10-25 Menit"
        },
        {
            title: "Penjemputan Harian",
            desc: "No Minumum",
            time: "08:00 - 12:00 WITA"
        },
        {
            title: "Langsung Kesana",
            desc: "No Minimum",
            time: "08:00 - 22:00 WITA"
        },
    ]

    function handleChoseWaktu(x: WaktuItem) {
        setWaktuChosen(x);
        setIsActive(false);
    }

    return (
        <div className="relative mt-8">
            <div>
                <h1 className="sm-semibold text-text-label mb-4">Waktu Jemput</h1>
                <div onClick={() => setIsActive((prev) => !prev)} className="cursor-pointer py-4.5 px-5 border-2 border-border-default rounded-2xl flex flex-row justify-between">
                    <h1 className="xs-semibold text-text-label">{waktuChosen?.title || "Cari Secepatnya"}</h1>
                    <CallendarIcon className="text-icon-default w-4 h-4" />
                </div>
            </div>
            {isActive && (
                <div className="bg-neutral-white mt-3 w-full left-0 grid-rows-3 rounded-2xl divide-y-3 divide-border-default border-2 border-border-default z-10">
                    {WaktuList.map((item, i) => (
                        <div key={i} onClick={() => handleChoseWaktu(item)} className="p-4 flex flex-row justify-between items-center cursor-pointer">
                            <div>
                                <h1 className="xs-default text-text-label">{item.title}</h1>
                                <p className="text-text-placeholder xs-default">{item.desc}</p>
                            </div>
                            <p className="xs-semibold text-text-placeholder">{item.time}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}