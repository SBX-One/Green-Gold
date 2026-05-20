import { useRef, useCallback, useState } from "react"

export function useDatePicker() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [date, setDate] = useState<string>("");

    const openDatePicker = useCallback(() => {
        if (inputRef.current) {
            if ('showPicker' in HTMLInputElement.prototype) {
                inputRef.current.showPicker();
            } 
            else {
                inputRef.current.click();
            }
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