/* eslint-disable react/prop-types */
import './CreditsModal.css';
import avatarList from '../utils/abilityUtils/avatarUtil';

function CreditsModal({ open, setOpen}){
    if (!open) return null;
    console.log(avatarList);
    return (
        <>
            <div 
                className='overlay'
                onClick={() => setOpen(false)}
            >
            </div>
            <div className='credits-modal'>
                <div className="credits">
                    <div className='toprow'>
                        <h2>Credits</h2>
                        <button onClick={() => setOpen(false)}>X</button>
                    </div>
                    <div className='avatars'>
                        {avatarList.map((avatar) => {
                            return (
                                <img 
                                    className='avatar'
                                    src={avatar.img}
                                    alt={avatar.name + " Pixelart"}
                                    key={avatar.name}
                                />
                            );
                        })}
                    </div>
                    <div className='fru-credit'>
                        <a 
                            href='http://mit.lesb.in/' 
                            target="_blank"
                            className='title'>
                                <u>FRU Mit but Good</u>
                        </a>
                        <br />
                        <span>Fae Nightwolf</span>
                        <br />
                        <br />
                        <a 
                            href='https://tinyurl.com/NAUR-Room-Mits' 
                            target="_blank"
                            className='title'>
                                <u>Room-Mits</u>
                        </a>
                        <br />
                        <span>Maintained by NAUR Staff</span>
                    </div>
                    <div className='top-credit'>
                        <a 
                            href='http://tinyurl.com/topmitty' 
                            target="_blank"
                            className='title'>
                                <u>Top Mitty</u>
                        </a>
                        <br />
                        <span>Malachite Laurent</span>
                    </div>
                    <div className='dsr-credit'>
                        <a 
                            href='https://tinyurl.com/naur-dsr-mit' 
                            target="_blank"
                            className='title'>
                                <u>NAUR DSR Mit</u>
                        </a>
                        <br />
                        <span>
                            Template & Original Document: Sausfest<br />
                            NAUR Staff for the updated mitigation<br />
                            Solarance Everwind @ Gilgamesh
                        </span>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default CreditsModal;