/* eslint-disable react/prop-types */
import abilityMap from "../utils/abilityUtils/abilityUtil";
import './AbilityCard.css';

function AbilityCard({ input }) {
    //const src = `${path}${input}.png`;
    const hasNote = typeof input !== 'string' && 'note' in input;
    const abilityName = typeof input === 'string' ? input : input['ability'];
    
    const iconClass = 'iconClass' in abilityMap[abilityName] ? ' ' + abilityMap[abilityName].iconClass : '';
    const captionClass = 'captionClass' in abilityMap[abilityName] ? ' ' + abilityMap[abilityName].captionClass : '';

    const hasOverflow = typeof input !== 'string' && 'hasOverflow' in input;
    const isGreyscale = typeof input !== 'string' && 'isGreyscale' in input && input['isGreyscale'];
    
    let output = <span>ability card src: {abilityName}</span>;
    try {
        //console.log(abilityMap[input].img);
        output = <div className={"aCard" + (hasOverflow ? " hasOverflow" : "") + (isGreyscale ? " isGreyscale" : "")}>
            <div className="iconWrapper">
                <img 
                className={"jobAbilityIcon" + (iconClass ? " " + iconClass : "")}
                src={abilityMap[abilityName].img}
                alt={abilityMap[abilityName].name + 'icon'}
                height='55'
                width='55'
                />
            </div>
            {
                hasNote ? 
                <div className="has-note">
                    <u className={"ability-caption hasStar" + captionClass}>
                        {abilityMap[abilityName].name + '*'}
                    </u>
                    <span className="tooltiptext">{input['note']}</span>
                </div>
                :
                <div className={"ability-caption" + captionClass}>
                    {abilityMap[abilityName].name}
                </div>
            }
        </div>
    } catch {
        output = <div className="aCard">{abilityName}</div>;
        //console.log(error);
    }

    return output;
    
}

export default AbilityCard;