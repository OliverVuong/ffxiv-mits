import { useState, useEffect } from "react";
import './ScrollToTop.css'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        isVisible && (
            <button 
                className='scrollTop' 
                onClick={scrollToTop}>
                    
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" fill="none"/>
                    <polyline points="8 13 12 9 16 13" 
                                fill="none" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"/>
                    </svg>

            </button>
        )
    );
}

export default ScrollToTop;