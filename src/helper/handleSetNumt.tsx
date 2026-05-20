import { useCallback } from "react";
import { useTrash } from "../context/TrashContext";

/**
 * Hook untuk handle perubahan jumlah sampah
 * Menggunakan global state dari TrashContext
 */
export function useHandleSetNum() {
    const {setNumSampah } = useTrash();

    const handleSetNum = useCallback((index: number) => (updater: (prev: number) => number) => {
        if (typeof setNumSampah === 'function') {
            (setNumSampah as React.Dispatch<React.SetStateAction<number[]>>)((prev) => {
            const updated = [...(prev || [])];
            if (updated[index] !== undefined) {
                updated[index] = updater(updated[index]);
            }
            return updated;
            });
        }
    }, [setNumSampah]);

    return handleSetNum;
}