import { useCallback } from "react";
import { useTrash } from "../context/TrashContext";

/**
 * Hook untuk handle perubahan jumlah sampah
 * Menggunakan global state dari TrashContext
 */
export function useHandleSetNum() {
    const {setNumSampah } = useTrash();

    const handleSetNum = useCallback((index: number) => (updater: (prev: number) => number) => {
        setNumSampah(prev => {
            const updated = [...prev];
            updated[index] = updater(updated[index]);
            return updated
        });
    }, [setNumSampah]);

    return handleSetNum;
}