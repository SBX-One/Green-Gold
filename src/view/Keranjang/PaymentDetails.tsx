import Bar from "../../components/common/Bar";
import mainLogo from "../../assets/svg/LogoMain.svg"
import ellipse from "../../assets/svg/ellipsis.svg"
import Data from "../../data/Keranjang.json";
import HitungTotalHarga from "../../helper/HitungTotalHarga";
import RigoButton from "../../components/ui/button/RigoButton";
import { useNavigate } from "react-router-dom";
import { useTrash } from "../../context/TrashContext";
import useWindowSize from "../../helper/WindowWidthCheck";

export default function PaymentDetails() {
    const totalHarga = HitungTotalHarga(Data);
    const grandTotal = totalHarga + 2000;
    const priceFormat = grandTotal.toLocaleString('id-ID');
    const subTotal = Data.map(item => item.harga * item.jumlah);
    const navigate = useNavigate();
    const { setIsOrder } = useTrash();
    const windowWidth = useWindowSize();
    const isMobile = windowWidth <= 768;
;
    function handleCheckOut() {
        navigate('/Home');
        setIsOrder(true);
    }
    
    return (
        <div className="p-5 border-2 border-border-default rounded-t-xl desktop:rounded-xl mt-10 md:pb-25 desktop:w-1/2 desktop:mt-0">
            <Bar title="Rp100.000 - Rp42.000" desc={"GREGO Wallet"} iconL={mainLogo} iconR={ellipse} iconRBorder={false} />
            
            <h1>Detail Pembayaran: </h1>
            <div className="flex flex-col gap-2 pb-12.5 mb-10 md:mb-14">
                {Data.map((item, i) => (
                    <div key={i} className="flex flex-row justify-between sm-default text-text-body">
                        <h1>{item.jumlah}X {item.namaBarang}</h1>
                        <p>Rp {subTotal[i]}</p>
                    </div>
                ))}
                <div className="flex flex-row justify-between text-text-body">
                    <h2>Handling and Shipping Cost</h2>
                    <p>Rp 2000</p>
                </div>
                <div className="flex flex-row justify-between text-text-label mt-4 pt-3 border-t-2 border-border-default">
                    <h3>Total:</h3>
                    <p>{priceFormat}</p>
                </div>
            </div>
            <RigoButton icon={isMobile} fullWidth={true} text="Checkout" inv={true} onClick={handleCheckOut} />
        </div>
    )
}