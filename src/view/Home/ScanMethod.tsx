import { useState } from "react"
import Tabs from "../../components/ui/button/Tabs";

export default function ScanMeth() {
    const [currentMode, setCurrentMode] = useState<boolean>(true);

    return (
        <div className="text-text-body">
            <Tabs setCurrentMode={setCurrentMode} currentMode={currentMode} />
            {currentMode ? (
                <div>
                    <h1>scan</h1>
                </div>
            ): (
                <div>
                    <h1>numpad</h1>
                </div>
            )}
        </div>
    )
}