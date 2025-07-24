import './Header.css';
import logo from '../assets/miscAssets/ffxivMitsLogo.png';

function Header(){
    return (
        <header>
            <div className="header-content">
                <div className='masthead'>
                    <img src={logo} alt='logo image'/>
                    <h2>FFXIV Mits</h2>
                </div>
                <div className='header-selection'>
                    <button>Encounters</button>
                    <button>Credits</button>
                </div>
            </div>
            <hr />
        </header>
        
    );
}

export default Header;