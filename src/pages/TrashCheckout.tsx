import Menu from "../components/layout/Menu"
import { useTrash } from "../context/TrashContext"

export default function TrashCheckout() {
    const { completedHarga } = useTrash();
    
    return (
        <div className="p-5 flex flex-col">
            <Menu back="/ScanYourTrash" />
            
            <div className="flex flex-col mt-8 gap-8">
                <h1 className="sm-semibold text-text-heading">Ringkasan Checkout</h1>
                
                <div className="bg-surface-default border-2 border-border-default rounded-2xl p-6 flex flex-col gap-4">
                    <div className="flex flex-row justify-between">
                        <span className="text-text-body">Total Harga Sampah:</span>
                        <span className="sm-semibold text-text-heading">
                            Rp. {completedHarga.toLocaleString('id-ID')}
                        </span>
                    </div>
                    
                    <hr className="border-border-default" />
                    
                    <div className="flex flex-row justify-between items-center pt-4">
                        <span className="text-text-body">Jumlah Pembayaran:</span>
                        <span className="text-2xl font-bold text-color-purple-default">
                            Rp. {completedHarga.toLocaleString('id-ID')}
                        </span>
                    </div>
                </div>

                <button className="bg-color-purple-default text-white p-4 rounded-2xl font-semibold">
                    Lanjut ke Pembayaran
                </button>
            </div>
        </div>
    )
} 