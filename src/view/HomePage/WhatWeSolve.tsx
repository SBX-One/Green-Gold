import { useEffect, useRef } from "react"; // Tambahkan useEffect dan useRef
import WWSCard from "../../components/common/RigoCard"
import LogoPill from "../../components/common/LogoPill"
import CustomClassFunction from "../../function/CustomClassFunction"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

export default function WhatWeSolve() {
    CustomClassFunction({CustomWidth: 768, CustomClass: "leading-normal", divRef:"WWSPara", RemoveCustomClass: "md-default"});
    gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { 
                    opacity: 0, 
                    y: 40 
                },
                {
                    opacity: 1,
                    y: 0, 
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current, 
                        start: "top 85%",
                        toggleActions: "play none none none" 
                    }
                }
            );
        }
    }, []);

    const WWSCardData = [
        {
            title: "Total Volume Sampah",
            date: "Tahun 2024 s/d 2025",
            volume: "+65M",
            desc: "Ton Sampah"
        },
        {
            title: "Peningkatan Volume Sampah",
            date: "Tahun 2023 s/d 2025",
            volume: "+15%",
            desc: "Peningkatan Volume Sampah"
        },
        {
            title: "Sampah Terdaur Ulang",
            date: "Tahun 2023 s/d 2025",
            volume: "<10%",
            desc: "Sampah Terdaur Ulang"
        },
    ]

    return (
        <div>
            <div className="w-fit desktop:mx-auto" >
                <LogoPill text="What We Solve" />
            </div>
            <div className="flex flex-col gap-6 mt-4 pb-16 border-b border-border-default desktop:w-122.75 desktop:text-center desktop:mx-auto">
                <h1 className="h1-heading wws-heading font-bold text-text-heading">Sampah terus meluap dengan pengelolaan konvensional.</h1>
                <p id="WWSPara" className="md-default wws-heading text-text-placeholder">
                    Volume sampah terus meningkat, namun sistem pengelolaan masih konvensional.
                </p>
            </div>
            
            {/* 3. Pasang ref ke div container card ini */}
            <div ref={containerRef} className="flex flex-col gap-5 mt-10 desktop:flex-row">
                    {WWSCardData.map((data, i) => (
                            <WWSCard key={i} {...data} />
                    ))}
            </div>
        </div>
    )
}