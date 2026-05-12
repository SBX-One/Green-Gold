import Numpad from "../icons/Numpad"
import ScanBarcode from "../icons/ScanBarcode"
import type { TabsProps } from "../../../type/type"
import { useRef } from "react"
import { gsap } from "gsap"

export default function Tabs({ setCurrentMode, currentMode }: TabsProps) {
    const thumbRef = useRef(null);

    const handleToggle = () => {
        const next = !currentMode;

        gsap.to(thumbRef.current, {
            left: next ? 0 : 44,
            duration: 0.3,
            ease: "back.out(1)"
        });

        setCurrentMode(next);
    }

    return (
        <div>
            <div onClick={handleToggle} className="w-26 py-1 bg-neutral-white border-2 border-border-default rounded-3xl relative cursor-pointer flex items-center px-1">
                <div className={`absolute ${currentMode ? "right-3" : "left-3"}`}>
                    {currentMode ? (
                        <Numpad className="text-icon-disabled w-4 h-4" />
                    ) : (
                        <ScanBarcode className="text-icon-disabled w-4 h-4" />
                    )}
                </div>
                <div ref={thumbRef} className="relative px-4 py-2.5 bg-surface-primary rounded-full flex justify-center items-center">
                    {currentMode ? (
                        <ScanBarcode className="text-icon-on-action w-4 h-4" />
                    ) : (
                        <Numpad className="text-icon-on-action w-4 h-4" />
                    )}
                </div>
            </div>
        </div>
    )
}