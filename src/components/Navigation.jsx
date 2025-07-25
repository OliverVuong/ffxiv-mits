/* eslint-disable react/prop-types */
//import encounters from '../utils/encounters';
import './Navigation.css';

const handleScroll = (ref) => {
    ref.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true
    })
}

function Navigation( { data, phasesRef } ) {
    console.log(data);
    return (
        <div className='nav'>
            {data.map((phase, index) => {
                return (
                    <button
                        key={phase.name}
                        onClick={() => handleScroll(phasesRef.current[index])}
                    >
                        <strong>{phase.name}</strong>
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