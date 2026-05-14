import { createContext, useState, useContext } from "react";
// Perbaikan 1: Gunakan import type
import type { ReactNode } from "react";

export interface SelectedTrashItem {
    name: string;
    quantity: number; // dalam kg
    harga: number;
}

export interface SelectedProduct {
    id: number;
    title: string;
    harga: number;
    img: string;
}

interface TrashContextType {
    totalHarga: number;
    setTotalHarga: (harga: number) => void;
    completedHarga: number;
    setCompletedHarga: (harga: number) => void;
    numSampah: number[];
    setNumSampah: (sampah: number[]) => void;
    selectedTrash: SelectedTrashItem[];
    setSelectedTrash: (trash: SelectedTrashItem[]) => void;
    selectedProduct: SelectedProduct | null;
    setSelectedProduct: (product: SelectedProduct | null) => void;
    title: string;
    setTitle: (title: string) => void;
    isOrder: boolean;
    setIsOrder: (isOrder: boolean) => void;
}

const TrashContext = createContext<TrashContextType | undefined>(undefined);

export function TrashProvider({ children }: { children: ReactNode }) {
    const [totalHarga, setTotalHarga] = useState<number>(0);
    const [completedHarga, setCompletedHarga] = useState<number>(0);
    const [numSampah, setNumSampah] = useState<number[]>([0, 0, 0, 0]);
    const [selectedTrash, setSelectedTrash] = useState<SelectedTrashItem[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
    const [isOrder, setIsOrder] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");

    return (
        <TrashContext.Provider value={{ totalHarga, setTotalHarga, completedHarga, setCompletedHarga, numSampah, setNumSampah, selectedTrash, setSelectedTrash, selectedProduct, setSelectedProduct, title, setTitle, isOrder, setIsOrder }}>
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