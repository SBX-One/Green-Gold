import type { CustomClassProps } from "../helper/type";
import { useEffect } from "react";

export default function CustomClassFunction({ CustomWidth, CustomClass, divRef, RemoveCustomClass }: CustomClassProps) {
    useEffect(() => {
        const handleResize = () => {
            const myDiv = document.getElementById(divRef);
            if (!myDiv) return;
            if (window.innerWidth >= CustomWidth) {
                myDiv.classList.add(CustomClass);
                if (RemoveCustomClass) {
                    myDiv.classList.remove(RemoveCustomClass);
                }
            } else {
                myDiv.classList.remove(CustomClass);
                if (RemoveCustomClass) {
                    myDiv.classList.add(RemoveCustomClass);
                }
            }
        };
        handleResize();

        window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, [CustomWidth, CustomClass, divRef, RemoveCustomClass]);
};