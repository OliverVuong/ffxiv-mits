/* eslint-disable react/prop-types */
import encounters from '../utils/encounters';

function Navigation( { encounter, mitplan } ) {
    return (
        <div className='nav'>
            {encounters[encounter][mitplan].map((phase) => {
                return (
                    <a
                        key={phase.name}
                        href={"#" + phase.name.replaceAll(" ", "")}
                    >
                        <button>{phase.name}</button>
                    </a>
                );
            })}
        </div>
    );
}

export default Navigation;