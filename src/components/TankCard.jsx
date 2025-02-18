/* eslint-disable react/prop-types */
//import jobMap from "../utils/jobIconUtil";
import jobAltMap from "../utils/jobAltIconUtil";

export function MtCard({input}) {
    let output = <div>ability card for: {input}</div>;
    let job = input.slice(-3);
    try {
        output = <span className="jCard">
            <span>{job}</span>
            <img 
                src={jobAltMap[job].img}
                alt={`Icon for ${job}`}
                className="alt"
            />
        </span>
    } catch {
        output = <span className="aCard">{input}</span>;
    }

    return output;
}

export function OtCard({input}) {
    let output = <div>ability card for: {input}</div>;
    let job = input.slice(-3);
    try {
        output = <span className="jCard">
            <img 
                src={jobAltMap[job].img}
                alt={`Icon for ${job}`}
                className="alt"
            />
            <span>{job}</span>
        </span>
    } catch {
        output = <span className="aCard">{input}</span>;
    }

    return output;
}