/* eslint-disable react/prop-types */
import './Header.css';
import logo from '../assets/miscAssets/ffxivMitsLogo.png';
import Dropdown from './Dropdown';

function Header({ setIsOpenCredits }){
    return (
        <header>
            <div className="header-content">
                <div className='masthead'>
                    <img src={logo} alt='logo image'/>
                    <h2>FFXIV Mits</h2>
                </div>
                <div className='header-selection'>
                    <Dropdown/>
                    <button 
                        onClick={()=> setIsOpenCredits(true)}
                        className='credit-btn'
                    >
                        Credits
                    </button>
                </div>
            </div>
            <hr />
        </header>
        
    );
}

export default Header;