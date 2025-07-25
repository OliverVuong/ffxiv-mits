 
import './Dropdown.css';
import { useState, useEffect, useRef } from 'react';

function Dropdown(){
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handler(e) {
            if(dropdownRef.current) {
                if(!dropdownRef.current.contains(e.target)){
                    setIsOpen(false);
                }
            }
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler)
        }
    })

    const dropdownOptions = [
        {
            id: 1,
            label: "Futures Rewritten (FMBG)",
            value: "FRU_FMBG",
            disabled: false,
        },
        {
            id: 2,
            label: "Futures Rewritten (NAUR)",
            value: "FRU_NAUR",
            disabled: false,
        },
        {
            id: 3,
            label: "The Omega Protocol",
            value: "TOP",
            disabled: false,
        },
        {
            id: 4,
            label: "Dragonsong's Reprise",
            value: "DSR",
            disabled: false,
        },
        {
            id: 5,
            label: "The Epic of Alexander",
            value: "TEA",
            disabled: true,
        },
        {
            id: 6,
            label: "The Weapon's Refrain",
            value: "UWU",
            disabled: true,
        },
        {
            id: 7,
            label: "The Unending Coil of Bahamut",
            value: "UCOB",
            disabled: true,
        },
    ]
    return (
        <div className='dropdown' ref={dropdownRef}>
            <button 
                className='toggle' 
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                Encounters
                <svg>
                    {/* <path d="m7 10 5 5 5-5z"></path> */}
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                </svg>
            </button>
            {isOpen && <div className='options'>
                {dropdownOptions.map((option) => {
                    if(option.disabled){
                        return (
                            <button disabled key={option.id}>{option.label}</button>
                        )
                    } else {
                        return (
                            <button key={option.id}>{option.label}</button>
                        )
                    }
                })}
            </div>}
        </div>
    );
}

export default Dropdown;