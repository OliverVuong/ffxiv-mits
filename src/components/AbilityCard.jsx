/* eslint-disable react/prop-types */
import abilityMap from "../utils/abilityUtil";

function AbilityCard({ input }) {
    //const src = `${path}${input}.png`;
    let output = <span>ability card src: {input}</span>;
    try {
        //console.log(abilityMap[input].img);
        output = <div className="aCard">
            <img 
                src={abilityMap[input].img}
                alt="alt text goes here"
                height='55'
                width='55'
            />
            <div>{abilityMap[input].name}</div>
        </div>
    } catch {
        output = <div className="aCard">{input}</div>;
        //console.log(error);
    }

    return output;
    
}

export default AbilityCard;