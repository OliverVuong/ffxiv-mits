 
import './Dropdown.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
            path: "/fru/fmbg",
            disabled: false,
        },
        {
            id: 2,
            label: "Futures Rewritten (NAUR)",
            value: "FRU_NAUR",
            path: "/fru/naur",
            disabled: false,
        },
        {
            id: 3,
            label: "The Omega Protocol",
            value: "TOP",
            path: "/top",
            disabled: false,
        },
        {
            id: 4,
            label: "Dragonsong's Reprise",
            value: "DSR",
            path: "/dsr",
            disabled: false,
        },
        {
            id: 5,
            label: "TEA (under construction)",
            value: "TEA",
            path: "/tea",
            disabled: true,
        },
        {
            id: 6,
            label: "UWU (under construction)",
            value: "UWU",
            path: "/uwu",
            disabled: true,
        },
        {
            id: 7,
            label: "UCOB (under construction)",
            value: "UCOB",
            path: "/ucob",
            disabled: true,
        },
    ]

    return (
        <div className='dropdown btn' ref={dropdownRef}>
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
                            <Link className='dropoption disabled' key={option.id}>{option.label}</Link>
                        )
                    } else {
                        return (
                            <Link to={option.path} className='dropoption active' key={option.id}>{option.label}</Link>
                        )
                    }
                })}
            </div>}
        </div>
    );
}

export default Dropdown;