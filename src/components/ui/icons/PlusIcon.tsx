
interface NumpadProps {
    className: string;
}

export default function PlusIcon({ className }: NumpadProps) {
    return (
        <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.33594V12.6693" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.33203 8H12.6654" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}