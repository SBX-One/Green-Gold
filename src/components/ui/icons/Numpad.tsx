interface NumpadProps {
    className: string;
}

export default function Numpad({ className }: NumpadProps) {
    return (
        <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
                <g clip-path="url(#clip0_1441_20529)">
                <path d="M4 4C4.55228 4 5 3.55228 5 3C5 2.44772 4.55228 2 4 2C3.44772 2 3 2.44772 3 3C3 3.55228 3.44772 4 4 4Z" fill="currentColor"/>
                <path d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z" fill="currentColor"/>
                <path d="M12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4Z" fill="currentColor"/>
                <path d="M4 7.5C4.55228 7.5 5 7.05228 5 6.5C5 5.94772 4.55228 5.5 4 5.5C3.44772 5.5 3 5.94772 3 6.5C3 7.05228 3.44772 7.5 4 7.5Z" fill="currentColor"/>
                <path d="M8 7.5C8.55228 7.5 9 7.05228 9 6.5C9 5.94772 8.55228 5.5 8 5.5C7.44772 5.5 7 5.94772 7 6.5C7 7.05228 7.44772 7.5 8 7.5Z" fill="currentColor"/>
                <path d="M12 7.5C12.5523 7.5 13 7.05228 13 6.5C13 5.94772 12.5523 5.5 12 5.5C11.4477 5.5 11 5.94772 11 6.5C11 7.05228 11.4477 7.5 12 7.5Z" fill="currentColor"/>
                <path d="M4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11Z" fill="currentColor"/>
                <path d="M8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11Z" fill="currentColor"/>
                <path d="M8 14.5C8.55228 14.5 9 14.0523 9 13.5C9 12.9477 8.55228 12.5 8 12.5C7.44772 12.5 7 12.9477 7 13.5C7 14.0523 7.44772 14.5 8 14.5Z" fill="currentColor"/>
                <path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_1441_20529">
                <rect width="16" height="16" fill="none"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}