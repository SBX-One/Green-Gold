import type { SimpleCardProps } from "../../type/type"
import plus from "../../assets/svg/plus.svg"
import minus from '../../assets/svg/minus.svg'
import { useState } from "react"
import check from "../../assets/svg/stats-up.svg"
import PlusIcon from "../ui/icons/PlusIcon"

export default function SimpleCard({ title, desc, button = true, icon, numSampah = 0, setNumSampah, mode }: SimpleCardProps) {
    const [isActive, setIsActive] = useState<boolean>(true)
    const [localNumSampah, setLocalNumSampah] = useState<number>(0)

    const handleAdd = () => {
        if (setNumSampah) {
            // Gunakan setNumSampah dari props jika ada
            setNumSampah(prev => prev + 1);
            if (isActive) {
                setIsActive(false);
            }
        } else {
            // Gunakan state lokal jika tidak ada setNumSampah
            setLocalNumSampah(prev => prev + 1);
            if (isActive) {
                setIsActive(false);
            }
        }
        console.log("click")
    }

    const handleSubtract = () => {
        if (setNumSampah) {
            // Gunakan setNumSampah dari props jika ada
            setNumSampah(prev => {
                const newValue = prev - 1;
                if (newValue <= 0) {
                    setIsActive(true);
                    return 0;
                }
                return newValue;
            })
        } else {
            // Gunakan state lokal jika tidak ada setNumSampah
            setLocalNumSampah(prev => {
                const newValue = prev - 1;
                if (newValue <= 0) {
                    setIsActive(true);
                    return 0;
                }
                return newValue;
            })
        }
    }


    return (
        <div className={`${mode === "add" ? "justify-center items-center" : ""} relative p-3 h-37.5 w-37.5 flex flex-col bg-neutral-white rounded-2xl border-2 border-border-default`}>
            <div className="flex flex-row-reverse">
                <img src={check} alt="stats" className={`w-4 h-4 ${mode === "add" ? "hidden" : ""}`} />
                <div className="flex flex-1 flex-col">
                    <h1 className="sm-semibold text-text-heading">{title}</h1>
                    <p className="xs-default text-text-placeholder">{desc}</p>
                </div>
            </div>
            {mode === "add" && isActive ? (
                <button onClick={handleAdd} className="flex flex-col gap-3 items-center w-full h-full justify-center">
                    <div className="p-2.5 border-2 border-border-default rounded-full w-fit">
                        <PlusIcon className="text-icon-default w-4 h-4" />
                    </div>
                    <h1 className="text-text-placeholder sm-default">Tambah Baru</h1>
                </button>    
            ) : mode === "add" && !isActive ? (
                <div className="flex justify-between flex-row-reverse items-center mt-auto w-full">
                    <button onClick={handleAdd} className="p-2.5 border-2 border-border-default rounded-2xl ">
                        <img src={plus} alt="plus" />
                    </button>
                    <p className="label-default text-text-body">{localNumSampah}</p>
                    <button onClick={handleSubtract} className="p-2.5 border-2 border-border-default rounded-2xl ">
                        <img src={minus} alt="minus" />
                    </button>
                </div>
            ) : (
                <div>
                    {button && isActive ? (
                        <div className="ml-auto mt-auto absolute w-full px-3 right-0 bottom-3">
                            <button onClick={handleAdd} className="p-2.5 border-2 border-border-default rounded-2xl ">
                                {icon ? (
                                    icon
                                ) : (
                                    <img src={plus} alt="" />
                                )}
                            </button>
                        </div>
                    ) : (
                        <div className="absolute w-full px-3 left-0 bottom-3 flex justify-between flex-row-reverse items-center mt-auto">
                            <button onClick={handleAdd} className="p-2.5 border-2 border-border-default rounded-2xl ">
                                <img src={plus} alt="plus" />
                            </button>
                            <p className="label-default text-text-body">{numSampah}</p>
                            <button onClick={handleSubtract} className="p-2.5 border-2 border-border-default rounded-2xl ">
                                <img src={minus} alt="minus" />
                            </button>
                        </div>
                    )} 
                </div>
            )}
        </div>
    )
}