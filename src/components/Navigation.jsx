/* eslint-disable react/prop-types */
import encounters from '../utils/encounters';
import './Navigation.css';

const handleScroll = (ref) => {
    ref.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true
    })
}

function Navigation( { encounter, mitplan, phasesRef } ) {
    return (
        <div className='nav'>
            {encounters[encounter][mitplan].map((phase, index) => {
                return (
                    <button
                        key={phase.name}
                        onClick={() => handleScroll(phasesRef.current[index])}
                    >
                        {phase.name}
                    </button>
                );
            })}
        </div>
    );
}

export default Navigation;

/* <a
        key={phase.name}
        href={"#" + phase.name.replaceAll(" ", "")}
    >
        <button>{phase.name}</button>
    </a> */