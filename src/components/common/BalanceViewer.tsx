import Data from "../../data/dummyData.json"

export default function BalanceViewer() {
    const balance = Data[0].balanceNominal

    console.log(balance)
    return (
        <div className="w-full h-full border-2 border-border-default text-center flex gap-2 flex-col rounded-2xl pt-5 pb-10"> 
            <p className="xs-default text-text-placeholder ">Balance</p>
            <h2 className="h2-heading text-text-heading">Rp. {balance.toLocaleString('id-ID')}</h2>
        </div>
    )
}