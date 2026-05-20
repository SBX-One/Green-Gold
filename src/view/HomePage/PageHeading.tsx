import logo from "../../assets/svg/LogoMain.svg"
import RigoButton from "../../components/ui/button/RigoButton"
import CustomClassFunction from "../../function/CustomClassFunction"
// import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function PageHeading() {
    CustomClassFunction({CustomWidth: 768, CustomClass: "display", divRef:"HeadingText", RemoveCustomClass: "h1-heading"});
    CustomClassFunction({CustomWidth: 768, CustomClass: "lg-default", divRef:"ParaText", RemoveCustomClass: "sm-default"});
    const navigate = useNavigate();

    const HeadingPageBtnList = [
        {
            text: "Mulai Belanja",
            inv: true,
            onclick: () => {navigate('/Home')}
        },
        {
            text: "Lihat Demo",
            inv: false
        }
    ]

    // const divRef = useRef<HTMLDivElement>(null);


    return (
        <div className="flex flex-col gap-8 desktop:w-190.25 mx-auto desktop:mt-39.25 mt-20">
            <div data-aos="fade-up" className="flex gap-2.5 px-4 py-3 justify-center">
                <img src={logo} alt="logo" />
                <h1 className="sm-semibold text-text-label">Grigo Foundation</h1>
            </div>
            <h1 id="HeadingText" data-aos="fade-up" data-aos-delay="100" className="text-text-heading h1-heading font-bold text-center md:w-134.25 desktop:w-fit mx-auto">
                Belanja Kebutuhan Tanpa Keluar Uang
            </h1>
            <p id="ParaText" data-aos="fade-up" data-aos-delay="200" className="sm-default text-text-placeholder text-center desktop:px-20.5"> 
                Ekosistem sirkular pertama yang menjemput sampah di depan pintu Anda dan mengubahnya menjadi poin belanja di E-commerce eksklusif.
            </p>

            <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4 flex-col md:flex-row md:mx-auto">
                {HeadingPageBtnList.map((btn, i) => (
                    <RigoButton key={i} inv={btn.inv} text={btn.text} onClick={btn.onclick} />
                ))}
            </div>
        </div>
    )
}