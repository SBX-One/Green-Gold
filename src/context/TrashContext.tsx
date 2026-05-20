import { createContext, useState, useContext, useEffect } from "react";
// Perbaikan 1: Gunakan import type
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

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
    desc: string;
    variant: string[];
}

interface Product {
    id: number | string,
    img: string
}

interface Kerjasama {
    productId: number;
}

interface KamusDetail {
    mainDesc: string;
    merek: string;
    potensi: string;
    kerjasama: Kerjasama[];
}

export interface KamusItem {
    title: string,
    para: string,
    desc: string,
    product: Product[];
    kamusDetail: KamusDetail[];
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
    addToTrash: (name: string, quantity: number, harga: number) => void;
    updateTrashQuantity: (name: string, quantity: number) => void;
    removeFromTrash: (name: string) => void;
    selectedProduct: SelectedProduct | null;
    setSelectedProduct: (product: SelectedProduct | null) => void;
    title: string;
    setTitle: (title: string) => void;
    isOrder: boolean;
    setIsOrder: (isOrder: boolean) => void;
    itemNum: number;
    setItemNum: (itemNum: number | ((prev: number) => number)) => void;
    itemVariant: string;
    setItemVariant: (itemVariant: string) => void;
    selectedMethod: string;
    setSelectedMethod: (selectedMethod: string) => void;
    userInput: string;
    setUserInput: (userInput: string) => void;
    chosenKamus: KamusItem | null;
    setChosenKamus: (chosenKamus: KamusItem) => void;
    handleCariJemput: () => void
    amount: string;
    setAmount: (amount: string) => void;
    resetTrash: () => void;
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
    const [itemNum, setItemNum] = useState<number>(0)
    const [itemVariant, setItemVariant] = useState<string>("")
    const [selectedMethod, setSelectedMethod] = useState<string>("")
    const [userInput, setUserInput] = useState<string>("");
    const [chosenKamus, setChosenKamus] = useState<KamusItem | null>(null);
    const [amount, setAmount] = useState<string>("");
    const navigate = useNavigate();
    
    const handleCariJemput = () => {
            setIsOrder(true);
            navigate('/Home');
            console.log("back to home")
        }

    const resetTrash = () => {
        setSelectedTrash([]);
        setTotalHarga(0);
        setNumSampah([0, 0, 0, 0]);
    };

    // Automatically calculate totalHarga
    useEffect(() => {
        const total = selectedTrash.reduce((sum, item) => sum + (item.quantity * item.harga), 0);
        setTotalHarga(total);
    }, [selectedTrash, setTotalHarga]);

    // Fungsi untuk manage selectedTrash
    const addToTrash = (name: string, quantity: number, harga: number) => {
        setSelectedTrash(prev => {
            const existing = prev.find(item => item.name === name);
            if (existing) {
                // Update quantity jika sudah ada
                return prev.map(item => 
                    item.name === name ? { ...item, quantity } : item
                );
            } else {
                // Tambah item baru
                return [...prev, { name, quantity, harga }];
            }
        });
    };

    const updateTrashQuantity = (name: string, quantity: number) => {
        setSelectedTrash(prev => 
            prev.map(item => 
                item.name === name ? { ...item, quantity } : item
            )
        );
    };

    const removeFromTrash = (name: string) => {
        setSelectedTrash(prev => prev.filter(item => item.name !== name));
    };

    return (
        <TrashContext.Provider value={{ amount, setAmount, addToTrash, updateTrashQuantity, removeFromTrash, handleCariJemput, resetTrash, chosenKamus, setChosenKamus, userInput, setUserInput, itemNum, setItemNum, itemVariant, setItemVariant, totalHarga, setTotalHarga, completedHarga, setCompletedHarga, numSampah, setNumSampah, selectedTrash, setSelectedTrash, selectedProduct, setSelectedProduct, title, setTitle, isOrder, setIsOrder, selectedMethod, setSelectedMethod }}>
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