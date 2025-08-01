/* eslint-disable react/prop-types */
import { roles, tankCombos, extras, displayNameMap } from '../utils/utils';
import AbilityCard from './AbilityCard';
import './Table.css';

//const data = JSON.parse(p1);
function Cell({mitigations, role}) {
    return(
        <div className='cell'>
            {mitigations[role].map((entry) => {
                return(
                    <AbilityCard 
                        key={typeof entry === 'string' ? entry : entry['ability']}
                        input={entry}
                    />
                );
            })}
        </div>
    );
}


function Row({ data, visibleRoles }) {

    let name = data['name'];
    let mitigations = data['mitigations'];
    let time
    if(data['time']){
        let minutes = Math.floor(data['time'] / 60);
        let seconds = data['time'] % 60;
        time = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    } else {
        time = "";
    }
    

    return (
        <tr>
            <th className='row-header'>{name}</th>
            <td className='time-td'>{time}</td>
            {visibleRoles.map((role) => {
                return (
                    <td key={role} className='container'>
                        {role in mitigations ? 
                        <Cell 
                            mitigations={mitigations}
                            role={role}
                        />
                        /*mitigations[role].map((entry) => {
                            return(
                                <AbilityCard 
                                    key={entry}
                                    input={entry}
                                />
                            );
                        })*/
                        : 
                        ''}
                    </td>
                );
            })}
        </tr>
    )
}

export function RoleCheck({ roleView, tankView }) {

    const visible = roles.filter((role) => roleView[role]);
    //const table = p1['sections'][0]['table'];

    const visTanks = tankCombos.filter((combo) => tankView[combo]);

    return (
        <>
            <div>Visible: {visible}</div>
            <div>Visible Tanks: {visTanks}</div>
            {/*<table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Time</th>
                        {visible.map((val) => {
                            return <th key={val}>{val}</th>;
                        })}
                    </tr>
                    <Row 
                        data={p1['sections'][0]['table'][0]}
                        visibleRoles={visible}
                    />
                    {table.map((row) => {
                        return (
                            <Row 
                                key={row['name']}
                                data={row}
                                visibleRoles={visible}
                            />
                        )
                    })}
                </tbody>
            </table>
            <div>Hello, component {JSON.stringify(p1)}</div>*/}
        </>
    );
}
//rename Table to sectiondisplay and include a section title

function TableView( {
    section, 
    roleOptions, 
    tankOptions,
    extraOptions,
    sheet
} ) {
    const visibleRoles = roles.filter((role) => roleOptions[role]);
    const containsCombo = (combo, combos) => {
        //console.log(encounter);
        for(const pair of combos){
            if(combo === pair[0] || combo === pair[1]){
                return true;
            }
        }
        return false;
    }
    const visibleTanks = tankCombos
                            .filter((combo) => tankOptions[combo])
                            .filter((combo) => containsCombo(combo, sheet.tankCombos));
    const visibleExtras = extras.filter((extra) => extraOptions[extra] && sheet.extras.includes(extra));
    const visible = visibleTanks.concat(visibleRoles).concat(visibleExtras);
    //console.log(section);
    let table = section['table']
    if(visibleTanks.length === 0){
        table = section['table'].filter((row) => row['stakeholder'] === 'all');
    }
    return (
        <table>
            <tbody>
                <tr>
                    <th className='name-header'></th>
                    <th className='time'>Time</th>
                    {visible.map((val) => {
                        return <th key={val} className={val}>{displayNameMap[val]} </th>;
                    })}
                    <th></th>
                </tr>
                {table.map((row) => {
                    return (
                        <Row 
                            key={row['name'] + row['time']}
                            data={row}
                            visibleRoles={visible}
                        />
                    )
                })}
            </tbody>
        </table>
    );
}

function SectionView( {
    sections, 
    roleOptions, 
    tankOptions,
    extraOptions,
    sheet
} ) {
    //const visible = roles.filter((role) => roleOptions[role]);
    //const visTanks = tankCombos.filter((combo) => tankOptions[combo]);
    return (
        <>
            {sections.map((section) => {
                return (
                    <div key={section['id']}>
                        {section['sectionName'] && <h3 className='section-header'>{section['sectionName']}</h3>}
                        <TableView 
                            section={section}
                            roleOptions={roleOptions}
                            tankOptions={tankOptions}
                            extraOptions={extraOptions}
                            sheet={sheet}
                        />
                    </div>
                );
            })}
        </>
    );
}

function PhaseView( {
    phase, 
    roleOptions, 
    tankOptions,
    extraOptions,
    phasesRef,
    index,
    sheet
} ){
    return (
        <>
            <h3 
                id={phase.name.replaceAll(" ", "")}
                className='phase-header'
                ref={(el) => (phasesRef.current[index] = el)}
            >
                {phase['name']}
            </h3>
            <SectionView
                sections={phase['sections']}
                roleOptions={roleOptions}
                tankOptions={tankOptions}
                extraOptions={extraOptions}
                sheet={sheet}
            />
        </>
    );
} 


export function EncounterView( {
    roleOptions, 
    tankOptions,
    extraOptions,
    phasesRef,
    sheet
}){
    //console.log('Encounter View prints:')
    //console.log(encounters[encounter][mitplan]);
    //console.log(sheet.data)
    //console.log('Encounter View end:')
    const phases = sheet.data;
    //console.log('EXTRA OPTIONS');
    //console.log(extraOptions);
    //onsole.log(extraOptions.filter((option) => extrasByPlan[encounter][mitplan].includes(option)));
    return (
        <div className='mitigation-sheet'>
            {/* <h2 className='mitplan-encounter-header'>{mitplan} {encounter}</h2> */}
            {phases.map((phase, index) => {
                return (
                    <PhaseView 
                        phase={phase}
                        roleOptions={roleOptions}
                        tankOptions={tankOptions}
                        extraOptions={extraOptions}
                        key={phase['phase']}
                        phasesRef={phasesRef}
                        index={index}
                        sheet={sheet}
                    />
                );
            })}
        </div>
    );
}




//export default Table;