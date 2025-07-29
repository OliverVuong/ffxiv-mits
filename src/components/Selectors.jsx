/* eslint-disable react/prop-types */
//import { useState } from 'react';
import { isTank } from "../utils/utils";
import { extras } from "../utils/utils";
import { MtCard, OtCard } from "./TankCard";
import extrasSelectorMap from "../utils/menuIconUtils/extraMenuUtil";
import DeselectAll from "./DeselectAll";
import { allSheets } from '../utils/mitSheets/mitSheetsUtil';
import './Selectors.css';

function Chip({ input, picks, setPicks }) {
    return (
        <div className={picks[input] ? 'chip active' : 'chip'}>
            <button
                onClick={() => {
                    let newState = {...picks};
                    newState[input] = !newState[input];
                    setPicks(newState)
                }}
            >
                <span className="check">{picks[input] && '🗸 '}</span>
                <span className="descriptor">{input}</span>
                
                {/*'✅ ✓ ✔ '*/}
            </button>
        </div>
    );
}

function RoleMenu({ roleView, setRoleView }) {
    return(
        <fieldset className="left">
            <legend>Roles</legend>
            <DeselectAll 
                selection={roleView}
                setSelection={setRoleView}
            />
            <div className="menu roles">
                <div className="container roles tanks">
                    <Chip 
                        input="T1" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                    <Chip 
                        input="T2" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                </div>
                <div className="container roles healers">
                    <Chip 
                        input="SCH" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                    <Chip 
                        input="SGE" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                    <Chip 
                        input="WHM" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                    <Chip 
                        input="AST" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                </div>
                <div className="container roles dps">
                    <Chip 
                        input="M1" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                    <Chip 
                        input="M2" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                    <Chip 
                        input="PRange" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                    <Chip 
                        input="Caster" 
                        picks={roleView}
                        setPicks={setRoleView}
                    />
                </div>
            </div>
        </fieldset>
    );
}

function ExtraChip( { input, extraPicks, setExtraPicks, hasData } ){
    const imgCode = extraPicks[input] ? input : input + 'G';
    return (
        <div className="extra-chip">
            <button className="extra-chip-button"
                onClick={() => {
                    let newState = {...extraPicks};
                    newState[input] = !newState[input];
                    setExtraPicks(newState)
                }}
            >
                <img 
                    src={extrasSelectorMap[imgCode].img}
                    alt={`Icon for ${input}`}
                    className="extra-icon"
                />
                <div className="text">{extrasSelectorMap[input].name}</div>
                {!hasData && 
                <div className="noDataOverlay">
                    <strong className="text">No&nbsp;Data</strong>
                </div>}
                {/*'✅ ✓ ✔ '*/}
            </button>
        </div>
    );
}

function ExtraMenu({ extrasByPlan, extraPicks, setExtraPicks }) {
    return (
        <fieldset>
            <legend>Extras</legend>
            {/* <div>{JSON.stringify(extraPicks)}</div> */}
            <DeselectAll 
                selection={extraPicks}
                setSelection={setExtraPicks}
            />
            <div className="extra-menu">
                {extras.map((extra) => {
                    return (
                        <ExtraChip
                            key={extra}
                            input={extra}
                            extraPicks={extraPicks}
                            setExtraPicks={setExtraPicks}
                            hasData={extrasByPlan.includes(extra)}
                        />
                        /* <Chip
                            key={extra}
                            input={extra}
                            picks={extraPicks}
                            setPicks={setExtraPicks}
                        /> */
                        
                    );
                })}
            </div>
        </fieldset>
    );
}

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
                className={tankView[mt] ? "left active" : "left"}
                onClick={()=> updateTankView(mt, ot)}
            >
                {/* tankView[mt] && '✅ ' */}
                <MtCard input={mt} isActive={tankView[mt]}/>
            </button>
            <button 
                className={tankView[ot] ? "right active" : "right"}
                onClick={()=> updateTankView(ot, mt)}
            >
                <OtCard input={ot}  isActive={tankView[ot]}/>
                {/* tankView[ot] && '✅ ' */}
            </button>
        </div>
    );
}

function TankMenu( {
    tankCombos,
    tankView, 
    setTankView
}){
    console.log(tankCombos);
    return(
        <fieldset className="right">
            <legend>Tanks</legend>
            {/* <div>{JSON.stringify(tankView)}</div> */}
            <div className="menu tanks">
                {tankCombos.map((pair) => {
                    return(
                        <TankPairChip 
                            key={pair[0]+pair[1]}
                            pair={pair}
                            tankView={tankView}
                            setTankView={setTankView}
                        />
                    );
                })}
            </div>
        </fieldset>
    );
}

/*  function EncounterSelector( { activeEncounter, setEncounter, setMitplan }){
    return (
        <fieldset>
            <legend>Encounter</legend>
            <div className="container encounter">
            {encounters.map((encounter) => {
                return <button 
                            className={encounter === activeEncounter ? 'active' : 'inactive'}
                            onClick={() => {
                                setEncounter(encounter);
                                setMitplan(defaultMitPlan[encounter])
                            }}
                            key={encounter}>
                            <div className="encounter-img-container">
                                <img 
                                    className="encounter-img"
                                    src={
                                        encounter === activeEncounter ? 
                                        encounterImgMap[encounter].img :
                                        encounterImgMap[encounter + 'opaque'].img 
                                    }
                                />
                                <div className="middle">
                                    <div className="text">{encounterNameMap[encounter]}</div>
                                </div>
                            </div>
                        </button>
            })
            }
            </div>
        </fieldset>
    );
}  */

/* function MitplanSelector( {encounter, mitplan, setMitplan} ){
    const mitPlans = mits[encounter];
    return (
        <>
            <fieldset className="container plan">
                <legend>Mitigation Plan</legend>
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
        </>
    );
} */

/* function Checkbox( { role, view, setView }) {
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
} */

function Selectors({ 
    roleView, 
    setRoleView,
    tankView, 
    setTankView,
    extraPicks,
    setExtraPicks,
    sheet
 }) {

    return (
    <div className="selectors">
        {/* <EncounterSelector 
            activeEncounter={encounter}
            setEncounter={setEncounter}
            setMitplan={setMitplan}
        />
        <MitplanSelector 
            encounter={encounter}
            mitplan={mitplan}
            setMitplan={setMitplan}
        /> */}
        <div className="container mits">
            <RoleMenu 
                roleView={roleView}
                setRoleView={setRoleView}
            />
            <TankMenu 
                tankCombos={allSheets[sheet].tankCombos}
                tankView={tankView}
                setTankView={setTankView}
            />
        </div>
        
        <ExtraMenu 
            extrasByPlan={allSheets[sheet].extras}
            extraPicks={extraPicks}
            setExtraPicks={setExtraPicks}
        />
    </div>)

    
}

export default Selectors