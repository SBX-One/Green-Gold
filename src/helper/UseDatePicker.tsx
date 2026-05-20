import { useRef, useCallback, useState } from "react"

export function useDatePicker() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [date, setDate] = useState<string>("");

    const openDatePicker = useCallback(() => {
        if (inputRef.current) {
            // Cara 1: Gunakan showPicker() jika browser support (Chrome, Edge, Opera)
            if ('showPicker' in HTMLInputElement.prototype) {
                inputRef.current.showPicker();
            } 
            // Cara 2: Fallback ke .click() untuk browser lain
            else {
                inputRef.current.click();
            }
            // Fokus ke input untuk memastikan date picker terbuka
            inputRef.current.focus();
        }
    }, []);

    const handleDateChange = useCallback((value: string) => {
        setDate(value);
    }, []);

    return { 
        openDatePicker, 
        inputRef, 
        date, 
        setDate: handleDateChange 
    };
}