/* eslint-disable react/prop-types */
import abilityMap from "../utils/abilityUtil";

function AbilityCard({ input }) {
    //const src = `${path}${input}.png`;
    const hasNote = typeof input !== 'string';
    const abilityName = hasNote ? input['ability'] : input;
    let output = <span>ability card src: {abilityName}</span>;
    try {
        //console.log(abilityMap[input].img);
        output = <div className="aCard">
            <div className="iconWrapper">
                <img 
                className="jobAbilityIcon"
                src={abilityMap[abilityName].img}
                alt="alt text goes here"
                height='55'
                width='55'
                />
            </div>
            {
                hasNote ? 
                <div className="has-note">
                    <u>
                        {abilityMap[abilityName].name + '*'}
                    </u>
                    <span className="tooltiptext">{input['note']}</span>
                </div>
                :
                <div>{abilityMap[abilityName].name}</div>
            }
        </div>
    } catch {
        output = <div className="aCard">{abilityName}</div>;
        //console.log(error);
    }

    return output;
    
}

export default AbilityCard;