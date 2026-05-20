import LogoPill from "../../components/common/LogoPill"
import RigoAccordian from "../../components/common/RigoAccordian"
import CustomClassFunction from "../../function/CustomClassFunction" 

export default function FAQ() {
    CustomClassFunction({CustomWidth: 768, CustomClass: "display", divRef:"h1-FAQ", RemoveCustomClass: "h1-heading"});
    CustomClassFunction({CustomWidth: 768, CustomClass: "leading-normal", divRef:"para-FAQ", RemoveCustomClass: "md-default"});

    const FAQData = [
        {
            title: "Sampah apa saja yang diterima?",
            content: "Kami menerima berbagai jenis sampah anorganik seperti plastik (botol, kantong, kemasan), kertas dan kardus, logam (kaleng, besi, aluminium), kaca, serta elektronik bekas (handphone, kabel, baterai). Untuk sampah organik seperti sisa makanan, saat ini kami belum melayani penjemputan — namun kamu bisa mengolahnya menjadi kompos di rumah."
        },
        {
            title: "Apakah ada batas minimum penjemputan?",
            content: "Ya, kami menetapkan berat minimum 2 kg per penjemputan agar proses logistik tetap efisien. Jika sampahmu belum mencapai 2 kg, kamu bisa menabungnya terlebih dahulu dan menjadwalkan penjemputan saat sudah cukup — atau kamu bisa langsung mengantarkan ke drop point terdekat tanpa batas minimum."
        },
        {
            title: "Apakah saya harus memilah sampah sendiri?",
            content: "Sebaiknya iya. Pemilahan sederhana — seperti memisahkan plastik, kertas, dan logam — sangat membantu proses daur ulang dan mempercepat verifikasi saat penjemputan. Namun jika kamu belum terbiasa, tim kami tetap akan membantu memilah di lokasi, meski proses penjemputan mungkin memakan waktu sedikit lebih lama."
        },
        {
            title: "Berapa lama proses penjemputan setelah pemesanan?",
            content: "Setelah kamu menjadwalkan penjemputan, petugas kami biasanya tiba dalam 1–2 hari kerja. Kamu akan mendapat notifikasi konfirmasi beserta estimasi waktu kedatangan melalui aplikasi atau WhatsApp. Untuk area di luar jangkauan rutin, waktu penjemputan bisa mencapai 3–4 hari kerja."
        },
        {
            title: "Bagaimana cara menghitung poinnya?",
            content: "Poin dihitung berdasarkan jenis dan berat sampah yang kamu setorkan. Sebagai gambaran: plastik mendapat 10 poin/kg, kertas 8 poin/kg, logam 15 poin/kg, dan elektronik dihitung per item. Poin yang terkumpul bisa ditukarkan dengan saldo e-wallet, voucher belanja, atau donasikan ke program lingkungan pilihan kami."
        },
    ]

    return (
        <div className="mt-32 pb-32 md:px-7.25 desktop:w-198 mx-auto">
            <LogoPill text="Grigo Foundation" />
            <div className="flex flex-col gap-8 mt-4 pb-16">
                <h1 id="h1-FAQ" className="h1-heading font-bold text-text-heading">
                    Frequently Asked Questions
                </h1>
                <p id="para-FAQ" className="md-default text-text-placeholder">
                    Acme Inc's personal AI helps you cut through the noise, speed up delivery, and stay focused without switching contexts.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {FAQData.map((item, index) => (
                    <RigoAccordian key={index} {...item} />
                ))}
            </div>
        </div>
    )
}