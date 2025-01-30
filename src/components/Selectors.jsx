/* eslint-disable react/prop-types */
//import { useState } from 'react';

function Checkbox( { role, selections, setSelections }) {
    return (
        <>
            <label>{role}</label>
            <input 
                type="checkbox"
                checked={selections[role]}
                onChange={() => {
                    let newSelections = {...selections};
                    newSelections[role] = !selections[role];
                    setSelections(newSelections)
                }}
            />
            {//<button onClick={()=>console.log(selections)}>Print</button>
            }
        </>
    )
}

function Selectors({ selections, setSelections }) {
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
    //const [selections, setSelections] = useState(defaults);

    return (
    <>
        <fieldset>
            <legend>Choose your tank roles</legend>
            <Checkbox 
                role="T1" 
                selections={selections}
                setSelections={setSelections}
            />
            <Checkbox 
                role="T2" 
                selections={selections}
                setSelections={setSelections}
            />
        </fieldset>

    <fieldset>
        <legend>Choose your healer roles</legend>
        <Checkbox 
            role="SCH" 
            selections={selections}
            setSelections={setSelections}
        />
        <Checkbox 
            role="SGE" 
            selections={selections}
            setSelections={setSelections}
        />
        <Checkbox 
            role="WHM" 
            selections={selections}
            setSelections={setSelections}
        />
        <Checkbox 
            role="AST" 
            selections={selections}
            setSelections={setSelections}
        />
    </fieldset>

    <fieldset>
        <legend>Choose your DPS roles</legend>
        <Checkbox 
            role="M1" 
            selections={selections}
            setSelections={setSelections}
        />
        <Checkbox 
            role="M2" 
            selections={selections}
            setSelections={setSelections}
        />
        <Checkbox 
            role="PRange" 
            selections={selections}
            setSelections={setSelections}
        />
        <Checkbox 
            role="Caster" 
            selections={selections}
            setSelections={setSelections}
        />
    </fieldset>
    
    </>
        /* <ul>
            {roles.map((role) => {
                return (
                    <li key={role}>
                        <Checkbox 
                            role={role} 
                            selections={selections}
                            setSelections={setSelections}
                        />
                    </li>
                );
            })}
        </ul> */
    )
}

export default Selectors