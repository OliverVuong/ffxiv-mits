/* eslint-disable react/prop-types */
//import jobMap from "../utils/jobIconUtil";
import jobAltMap from "../utils/jobAltIconUtil";

export function MtCard({input, isActive}) {
    let output = <div>ability card for: {input}</div>;
    let job = input.slice(-3);
    try {
        output = <>
            <span className="check">{isActive && '🗸 '}</span>
            <span className="descriptor">{job + ' '} </span>
            <img 
                src={jobAltMap[job].img}
                alt={`Icon for ${job}`}
                className="icon"
            />
        </>
    } catch {
        output = <span className="aCard">{input}</span>;
    }

    return output;
}

export function OtCard({input, isActive}) {
    let output = <div>ability card for: {input}</div>;
    let job = input.slice(-3);
    try {
        output = <>
            <img 
                src={jobAltMap[job].img}
                alt={`Icon for ${job}`}
                className="icon"
            />
            <span className="descriptor">{job}</span>
            <span className="check">{isActive && '🗸 '}</span>
        </>
    } catch {
        output = <span className="aCard">{input}</span>;
    }

    return output;
}