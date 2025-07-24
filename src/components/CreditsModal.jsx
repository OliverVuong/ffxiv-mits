/* eslint-disable react/prop-types */
import './CreditsModal.css';

function CreditsModal({ open, setOpen}){
    if (!open) return null;

    return (
        <>
            <div 
                className='overlay'
                onClick={() => setOpen(false)}
            >
            </div>
            <div className='credits-modal'>
                <button onClick={() => setOpen(false)}>Close</button>
                <div className="credits">
                    <h2>Credits</h2>
                    <div>
                        FMBG&mdash;
                        <strong> Nightwolf</strong>
                    </div>
                    <div>
                        Room-Mits&mdash;
                        <strong>Maintained by NAUR Staff</strong>
                    </div>
                    <div>
                        FRU Mitty&mdash;
                        <strong>wolfboy23</strong>
                    </div>
                    <div>
                        Top Mitty&mdash;
                        <strong>Malachite Laurent</strong>
                    </div>
                    <div>
                        NAUR DSR Mit&mdash;
                        <strong>
                            Template & Original Document: Sausfest, Vault Knights Sheet: Solarance Everwind @ Gilgamesh, NAUR Staff for the updated mitigation
                        </strong>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default CreditsModal;