/* eslint-disable react/prop-types */
import './Header.css';
import logo from '../assets/miscAssets/ffxivMitsLogo.png';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

function Header({ setIsOpenCredits }){
    return (
        <>
            <header>
                <div className="header-content">
                    <Link to={'/ffxiv-mits'} className='masthead'>
                        <img src={logo} alt='logo image'/>
                        <h2>FFXIV Mits</h2>
                    </Link>
                    <div className='header-selection'>
                        <Dropdown/>
                        <button 
                            onClick={()=> setIsOpenCredits(true)}
                            className='credit btn'
                        >
                            Credits
                        </button>
                    </div>
                </div>
                <hr />
            </header>
        </>
        
    );
}

export default Header;