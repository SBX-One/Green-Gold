import logo from "../../assets/svg/LogoMain.svg"
import RigoButton from "../../components/RigoButton"

export default function PageHeading() {
    const HeadingPageBtnList = [
        {
            text: "Mulai Belanja",
            inv: true
        },
        {
            text: "Lihat Demo",
            inv: false
        }
    ]

    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-2.5 px-4 py-3 justify-center">
                <img src={logo} alt="logo" />
                <h1 className="sm-semibold text-text-label">Grigo Foundation</h1>
            </div>
            <h1 className="h1-heading text-text-heading font-bold text-center">
                Belanja Kebutuhan Tanpa Keluar Uang
            </h1>
            <p className="sm-default text-text-placeholder text-center"> 
                Ekosistem sirkular pertama yang menjemput sampah di depan pintu Anda dan mengubahnya menjadi poin belanja di E-commerce eksklusif.
            </p>

            <div className="flex gap-4 flex-col">
                {HeadingPageBtnList.map((btn, i) => (
                    <RigoButton key={i} inv={btn.inv} text={btn.text} />
                ))}
            </div>
        </div>
    )
}