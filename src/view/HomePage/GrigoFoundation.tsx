import LogoPill from "../../components/LogoPill"
import RigoButton from "../../components/RigoButton"
import RigoCard from "../../components/RigoCard"
import CustomClassFunction from "../../function/CustomClassFunction"

export default function GrigoFoundation() {
    CustomClassFunction({CustomWidth: 768, CustomClass: "display", divRef:"mainTitle", RemoveCustomClass: "h1-heading"});

    const GrigoFoundationData = [
        {
            title: "Total Pengguna",
            date: "Tahun 2024 s/d 2025",
            volume: "+45K",
            desc: "Pengguna Aktif"
        },
        {
            title: "Total Volume Terkumpul",
            date: "Tahun 2023 s/d 2025",
            volume: "+2,8K",
            desc: "Ton Sampah Terkumpul"
        },
        {
            title: "Total Volume Sampah",
            date: "Tahun 2023 s/d 2025",
            volume: "-60%",
            desc: "Total Volume Sampah Nasional"
        },
    ]

    return (
        <div className="border-2 border-border-default rounded-xl -mx-3 md:-mx-10 bg-neutral-white mt-32 ">
            <div className="pt-15 px-3 pb-15 md:pb-24 relative">
                <div className="-mx-3 border-b-2 border-border-default mb-10">
                    <div className="w-fit md:mx-auto">
                        <LogoPill text="Grigo Foundation" />
                    </div>
                    <h1 id="mainTitle" className="h1-heading text-text-heading text-center py-8"> 
                        Mulai Kumpulkan Sampah dan Tukar Untuk Barang Baru
                    </h1>
                    <div className="flex flex-col md:flex-row md:justify-center gap-4 pt-6 pb-16">
                        <RigoButton text="Mulai Sekarang" inv={true} />
                        <RigoButton text="Lihat Demo" inv={false} />
                    </div>
                </div>

                <div className="flex flex-col gap-5 desktop:flex-row">
                    {GrigoFoundationData.map((item, index) => (
                        <RigoCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}