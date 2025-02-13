/* eslint-disable react/prop-types */
//import { useState } from 'react';
import { isTank } from "../utils/utils";
import { encounters } from "../utils/utils";
import { mits } from "../utils/utils";
//import { tankStateDefault } from "../utils/utils";
import { tankCombosByPlan } from "../utils/utils";

function TankPairChip( {pair, tankView, setTankView} ) {
    const mt = pair[0];
    const ot = pair[1];
    const updateTankView = (clickedTank, partnerTank) => {
        let newSelections = {...tankView};
        newSelections[clickedTank] = !tankView[clickedTank];
        if(isTank(clickedTank)){
            //cannot view mits from two different tank combos at once
            //any selection outside new selection is flipped off
            for(const it in newSelections){
                if(it === clickedTank || it === partnerTank){
                    continue;
                }
                newSelections[it] = false;
            }
        }
        setTankView(newSelections)
    }

    return(
        <div className="tankpair chip">
            <button 
                className="left"
                onClick={()=> updateTankView(mt, ot)}
            >
                {tankView[mt] && '✅ '}{mt}
            </button>
            <button 
                className="right"
                onClick={()=> updateTankView(ot, mt)}
            >
                {ot}{tankView[ot] && '✅ '}
            </button>
        </div>
    );
}

function TankMenu( {
    encounter, 
    mitplan, 
    tankView, 
    setTankView
}){
    return(
        <fieldset>
            <legend>Choose Tankbuster Mitigations</legend>
            <div>{JSON.stringify(tankView)}</div>
            {tankCombosByPlan[encounter][mitplan].map((pair) => {
                return(
                    <TankPairChip 
                        key={pair[0]+pair[1]}
                        pair={pair}
                        tankView={tankView}
                        setTankView={setTankView}
                    />
                );
            })}
        </fieldset>
    );
}

function EncounterSelector( { setEncounter }){
    return (
        <>
        {encounters.map((encounter) => {
            return <button 
                        onClick={() => setEncounter(encounter)}
                        key={encounter}>
                            {encounter}
                    </button>
        })
        }
        </>
    );
}

function MitplanSelector( {encounter, mitplan, setMitplan} ){
    const mitPlans = mits[encounter];
    return (
        <>
            <fieldset>
                <legend>Select Mitigation Plan</legend>
                {mitPlans.map((plan) => {
                    return (
                        <div 
                            className="radiobox"
                            key={plan}
                        >
                            <label>
                                <input
                                    type="radio"
                                    name="mitplan"
                                    value={plan}
                                    checked={mitplan===plan}
                                    onChange={()=>setMitplan(plan)}
                                    className="radiobox-input"
                                />
                                {plan}
                            </label>
                        </div>
                    );
                })}
            </fieldset>
            <div>mitplan state: {mitplan}</div>
        </>
    );
}

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

function Selectors({ 
    roleView, 
    setRoleView,
    tankView, 
    setTankView,
    encounter,
    setEncounter,
    mitplan,
    setMitplan
 }) {

    return (
    <>
        <EncounterSelector 
            setEncounter={setEncounter}
        />
        <MitplanSelector 
            encounter={encounter}
            mitplan={mitplan}
            setMitplan={setMitplan}
            />
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
        {
        /*
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
        */
        }
        <TankMenu 
            encounter={encounter}
            mitplan={mitplan}
            tankView={tankView}
            setTankView={setTankView}
        />
    
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