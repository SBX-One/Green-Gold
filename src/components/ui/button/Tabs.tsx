import type { TabsProps } from "../../../helper/type"
import { useRef } from "react"
import { gsap } from "gsap"

export default function Tabs({ setCurrentMode, currentMode }: TabsProps) {
    const thumbRef = useRef(null);

    const handleToggle = () => {
        const next = !currentMode;

        gsap.to(thumbRef.current, {
            left: next ? "50%" : 0,
            duration: 0.3,
            ease: "power.out(1)"
        });

        setCurrentMode(next);
    }

    return (
        <div>
            <div onClick={handleToggle} className="py-1 px-2 relative cursor-pointer flex items-center justify-between gap-2">
                <div className="flex-1 text-center">
                    <h1 className={`text-center text-sm font-medium transition-colors duration-300 ${!currentMode ? "text-text-heading font-semibold" : "text-text-placeholder"}`}>
                        Numpad
                    </h1>
                </div>
                <div ref={thumbRef} className={`${currentMode ? "border-l-2 border-border-default" : "border-r-2 border-border-default"} absolute top-0.5 px-3 bottom-0.5 w-1/2 bg-neutral-white flex justify-center items-center pointer-events-none`}>
                    <h1 className="text-sm font-medium text-text-action">
                        {currentMode ? "Barcode" : "Numpad"}
                    </h1>
                </div>
                <div className="flex-1 text-center">
                    <h1 className={`text-sm font-medium transition-colors duration-300 ${currentMode ? "text-text-heading font-semibold" : "text-text-placeholder"}`}>
                        Barcode
                    </h1>
                </div>
            </div>
        </div>
    )
}