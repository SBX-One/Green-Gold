import SimpleCard from "../../components/common/SimpleCard"
import Data from "../../data/SampahUmum.json"
import { useState } from "react"
import { useTrash } from "../../context/TrashContext"

export default function AddSampahTemplate() {
    const { addToTrash, selectedTrash, removeFromTrash } = useTrash();
    const [localQuantities, setLocalQuantities] = useState<Record<string, number>>(() => {
        const initial: Record<string, number> = {};
        selectedTrash.forEach(item => {
            initial[item.name] = item.quantity;
        });
        return initial;
    });

    const handleQuantityChange = (title: string, quantity: number) => {
        setLocalQuantities(prev => ({ ...prev, [title]: quantity }));
        
        if (quantity > 0) {
            addToTrash(title, quantity, 1000);
        } else {
            removeFromTrash(title);
        }
    };

    return (
        <div>
            {Data.map((item, i) => (
                <div key={i} className="my-8">
                    <h1 className="xs-default text-text-label mb-4">{item.name}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 gap-5 max-w-none mx-auto">
                        {item.Category.map((category, idx) => (
                            <div key={idx}>
                                <SimpleCard title={category.title} desc={category.desc} numSampah={localQuantities[category.title] || 0}
                                    setNumSampah={(updater) => {
                                        const newQty = updater(localQuantities[category.title] || 0);
                                        handleQuantityChange(category.title, newQty);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}