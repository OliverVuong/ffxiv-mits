import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
            <p className='return-home'>
                <Link to={'/ffxiv-mits'} className='return-home-btn'>
                    Go to Homepage
                </Link>
            </p>
        </div>
    )
}

export default NotFound;