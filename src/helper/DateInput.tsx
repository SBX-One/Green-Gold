import type { RefObject } from "react";

interface DateInputProps {
    inputRef: RefObject<HTMLInputElement | null>;
    onChange: (date: string) => void;
    value?: string;
}

export default function DateIput({ inputRef, onChange, value }: DateInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = e.target.value;
        onChange(selectedDate);
    };

    return (
        <input 
            type="date" ref={inputRef} value={value || ""} onChange={handleChange} className="hidden" aria-label="Pilih tanggal"
        />
    );
}