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
                    <div className='dmu-credit'>
                        <a 
                            href='https://tinyurl.com/ikuyamittydmu' 
                            target="_blank"
                            className='title'>
                                <u>Ikuya Mitty</u>
                        </a>
                        <br />
                        <span>
                            Ikuya Kirishima
                        </span>
                    </div>
                    <div className='fru-credit'>
                        <a 
                            href='http://mit.lesb.in/' 
                            target="_blank"
                            className='title'>
                                <u>FRU Mit but Good</u>
                        </a>
                        <br />
                        <span>Fae Nightwolf & Valiaa Masume</span>
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
                            href='https://bit.ly/topmit2' 
                            target="_blank"
                            className='title'>
                                <u>Run: **NAmit</u>
                        </a>
                        <br />
                        <span>
                            Unknown 01<br />
                            Top Mitty- Malachite Laurent
                        </span>
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
                    <div className='tea-credit'>
                        <a 
                            href='https://docs.google.com/spreadsheets/d/1A58RflNeNq9mesuvSEcQzIvQ3MwOGyvPRi5khNACrc8/edit#gid=1511755464' 
                            target="_blank"
                            className='title'>
                                <u>TEA Mit+Heal</u>
                        </a>
                        <br />
                        <span>
                            edited for NAUR with the help from Jamie Jams@Faerie<br />
                            reworked on 11/21/2025 on behalf of NAUR-Staff
                        </span>
                    </div>
                    <div className='uwu-credit'>
                        <a 
                            href='https://docs.google.com/spreadsheets/d/1Aebpp_26RpVMYL3vLzahu461BbrwXkMENNRVSoqbxYw/edit?usp=sharing' 
                            target="_blank"
                            className='title'>
                                <u>UWU Mit - Ethel Master</u>
                        </a>
                        <br />
                        <span>
                            Mitigation provided by: Ethel Malaguld<br />
                            Base excel created by Kizu Sayuri and edited by Chad Bradly								
                        </span>
                    </div>
                    <div className='ucob-credit'>
                        <a 
                            href='https://tinyurl.com/ucobmitty' 
                            target="_blank"
                            className='title'>
                                <u>ucob mit recommendations</u>
                        </a>
                        <br />
                        <span>
                            Cob Enjoyers								
                        </span>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default CreditsModal;