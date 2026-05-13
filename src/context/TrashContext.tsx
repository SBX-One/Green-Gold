import { createContext, useState, useContext } from "react";
// Perbaikan 1: Gunakan import type
import type { ReactNode } from "react"; 

interface TrashContextType {
    totalHarga: number;
    setTotalHarga: (harga: number) => void;
    completedHarga: number;
    setCompletedHarga: (harga: number) => void;
}

const TrashContext = createContext<TrashContextType | undefined>(undefined);

export function TrashProvider({ children }: { children: ReactNode }) {
    const [totalHarga, setTotalHarga] = useState<number>(0);
    const [completedHarga, setCompletedHarga] = useState<number>(0);

    return (
        <TrashContext.Provider value={{ totalHarga, setTotalHarga, completedHarga, setCompletedHarga }}>
            {children}
        </TrashContext.Provider>
    );
}

export function useTrash() {
    const context = useContext(TrashContext);
    if (!context) {
        throw new Error("useTrash harus digunakan dalam TrashProvider");
    }
    return context;
}