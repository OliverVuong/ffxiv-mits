/* eslint-disable react/prop-types */
import abilityMap from "../utils/abilityUtil";

function AbilityCard({ input }) {
    //const src = `${path}${input}.png`;
    let output = <div>ability card src: {input}</div>;
    try {
        //console.log(abilityMap[input].img);
        output = <div className="aCard">
            <img 
                src={abilityMap[input].img}
                alt="alt text goes here"
            />
            <div>{abilityMap[input].name}</div>
        </div>
    } catch (error) {
        output = <div className="aCard">{input}</div>;
        //console.log(error);
    }

    return output;
    
}

export default AbilityCard;