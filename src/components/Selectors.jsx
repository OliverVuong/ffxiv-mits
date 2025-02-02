/* eslint-disable react/prop-types */
//import { useState } from 'react';
import { isTank } from "../utils/utils";

function Checkbox( { role, view, setView }) {
    return (
        <>
            <label>{role}</label>
            <input 
                type="checkbox"
                checked={view[role]}
                onChange={() => {
                    let newSelections = {...view};
                    newSelections[role] = !view[role];
                    if(isTank(role)){
                        //cannot view mits from two different tank combos at once
                        //any selection outside new selection is flipped off
                        for(const combo in newSelections){
                            if(combo.slice(0, 6) !== role.slice(0, 6)){
                                newSelections[combo] = false;
                            }
                        }
                    }
                    setView(newSelections)
                }}
            />
            {//<button onClick={()=>console.log(selections)}>Print</button>
            }
        </>
    )
}

function Selectors({ roleView, setRoleView, tankView, setTankView }) {
    /*const roles = [
        'T1',
        'T2',
        'SCH',
        'SGE',
        'WHM',
        'AST',
        'M1',
        'M2',
        'PRange',
        'Caster'
    ];
    const defaults = {};
    for(const role of roles){
        defaults[role] = true;
    }*/
    //const [selections, setView] = useState(defaults);

    return (
    <>
        <fieldset>
            <legend>Choose your tank roles</legend>
            <Checkbox 
                role="T1" 
                view={roleView}
                setView={setRoleView}
            />
            <Checkbox 
                role="T2" 
                view={roleView}
                setView={setRoleView}
            />
        </fieldset>

        <fieldset>
            <legend>Choose your healer roles</legend>
            <Checkbox 
                role="SCH" 
                view={roleView}
                setView={setRoleView}
            />
            <Checkbox 
                role="SGE" 
                view={roleView}
                setView={setRoleView}
            />
            <Checkbox 
                role="WHM" 
                view={roleView}
                setView={setRoleView}
            />
            <Checkbox 
                role="AST" 
                view={roleView}
                setView={setRoleView}
            />
        </fieldset>

        <fieldset>
            <legend>Choose your DPS roles</legend>
            <Checkbox 
                role="M1" 
                view={roleView}
                setView={setRoleView}
            />
            <Checkbox 
                role="M2" 
                view={roleView}
                setView={setRoleView}
            />
            <Checkbox 
                role="PRange" 
                view={roleView}
                setView={setRoleView}
            />
            <Checkbox 
                role="Caster" 
                view={roleView}
                setView={setRoleView}
            />
        </fieldset>
        <div>
            <fieldset>
                <legend>WAR+GNB</legend>
                <Checkbox 
                    role="WARGNB_WAR" 
                    view={tankView}
                    setView={setTankView}
                />
                <Checkbox 
                    role="WARGNB_GNB" 
                    view={tankView}
                    setView={setTankView}
                />
            </fieldset>
            <fieldset>
                <legend>WAR+PLD</legend>
                <Checkbox 
                    role="WARPLD_WAR" 
                    view={tankView}
                    setView={setTankView}
                />
                <Checkbox 
                    role="WARPLD_PLD" 
                    view={tankView}
                    setView={setTankView}
                />
            </fieldset>
            <fieldset>
                <legend>WAR+DRK</legend>
                <Checkbox 
                    role="WARDRK_WAR" 
                    view={tankView}
                    setView={setTankView}
                />
                <Checkbox 
                    role="WARDRK_DRK" 
                    view={tankView}
                    setView={setTankView}
                />
            </fieldset>
            <fieldset>
                <legend>GNB+DRK</legend>
                <Checkbox 
                    role="GNBDRK_GNB" 
                    view={tankView}
                    setView={setTankView}
                />
                <Checkbox 
                    role="GNBDRK_DRK" 
                    view={tankView}
                    setView={setTankView}
                />
            </fieldset>
            <fieldset>
                <legend>GNB+PLD</legend>
                <Checkbox 
                    role="GNBPLD_GNB" 
                    view={tankView}
                    setView={setTankView}
                />
                <Checkbox 
                    role="GNBPLD_PLD" 
                    view={tankView}
                    setView={setTankView}
                />
            </fieldset>
            <fieldset>
                <legend>PLD+DRK</legend>
                <Checkbox 
                    role="PLDDRK_PLD" 
                    view={tankView}
                    setView={setTankView}
                />
                <Checkbox 
                    role="PLDDRK_DRK" 
                    view={tankView}
                    setView={setTankView}
                />
            </fieldset>
        </div>
    
    </>
        /* <ul>
            {roles.map((role) => {
                return (
                    <li key={role}>
                        <Checkbox 
                            role={role} 
                            selections={selections}
                            setView={setView}
                        />
                    </li>
                );
            })}
        </ul> */
    )
}

export default Selectors