import './Footer.css';
import ScrollToTop from './ScrollToTop';

function Footer(){
    return (
        <>
        <ScrollToTop />
        <footer>
            <hr className='footer-divider'/>
            <div className='footer-content'>
                <div>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. FINAL FANTASY XIV © SQUARE ENIX</div>
                <div className='right'>Created by Jaye Money@Ultros</div>
            </div>
        </footer>
        </>
        
    );
}

export default Footer;