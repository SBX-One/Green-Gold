import LogoPill from "../../components/LogoPill"
import RigoAccordian from "../../components/RigoAccordian"
import CustomClassFunction from "../../function/CustomClassFunction" 

export default function FAQ() {
    CustomClassFunction({CustomWidth: 768, CustomClass: "display", divRef:"h1-FAQ", RemoveCustomClass: "h1-heading"});
    CustomClassFunction({CustomWidth: 768, CustomClass: "leading-normal", divRef:"para-FAQ", RemoveCustomClass: "md-default"});

    const FAQData = [
        {
            title: "Sampah apa saja yang diterima?",
            content:"Yes. It adheres to the WAI-ARIA design pattern."
        },
        {
            title: "Apakah ada batas minimum penjemputan?",
            content:"Yes. It adheres to the WAI-ARIA design pattern."
        },
        {
            title: "Apakah saya harus memilah sampah sendiri?",
            content:"Yes. It adheres to the WAI-ARIA design pattern."
        },
        {
            title: "Sampah apa saja yang diterima?",
            content:"Yes. It adheres to the WAI-ARIA design pattern."
        },
        {
            title: "Bagaimana cara menghitung poinnya?",
            content:"Yes. It adheres to the WAI-ARIA design pattern."
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
            {/* <Seperator height={50} /> */}
        </div>
    )
}