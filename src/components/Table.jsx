/* eslint-disable react/prop-types */
//import p1 from '../data/fru/p1.json'
import encounters from '../utils/encounters';
import { roles } from '../utils/utils';
import { tankCombos } from '../utils/utils';

//const data = JSON.parse(p1);

function Row({ data, visibleRoles }) {

    let name = data['name'];
    let mitigations = data['mitigations'];
    let minutes = Math.floor(data['time'] / 60);
    let seconds = data['time'] % 60;
    let time = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    return (
        <tr>
            <th>{name}</th>
            <td>{time}</td>
            {
                visibleRoles.map((role) => {
                    return (
                        <td key={role}>
                            {role in mitigations ? mitigations[role] : ''}
                        </td>
                    );
                })
            }
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

function TableView( {section, roleOptions, tankOptions} ) {
    const visible = roles.filter((role) => roleOptions[role]);
    const visTanks = tankCombos.filter((combo) => tankOptions[combo]);
    //console.log(section);
    let table = section['table']
    if(visTanks.length === 0){
        table = section['table'].filter((row) => row['stakeholder'] === 'all');
    }
    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>Time</th>
                    {visible.map((val) => {
                        return <th key={val}>{val}</th>;
                    })}
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

function SectionView( {sections, roleOptions, tankOptions} ) {
    //const visible = roles.filter((role) => roleOptions[role]);
    //const visTanks = tankCombos.filter((combo) => tankOptions[combo]);
    return (
        <>
            {sections.map((section) => {
                return (
                    <div key={section['id']}>
                        {section['sectionName'] && <h3>{section['sectionName']}</h3>}
                        <TableView 
                            section={section}
                            roleOptions={roleOptions}
                            tankOptions={tankOptions}
                        />
                    </div>
                );
            })}
        </>
    );
}

function PhaseView( {phase, roleOptions, tankOptions} ){
    return (
        <>
            <h3 id={phase.name.replaceAll(" ", "")}>{phase['name']}</h3>
            <SectionView
                sections={phase['sections']}
                roleOptions={roleOptions}
                tankOptions={tankOptions}
            />
        </>
    );
} 


export function EncounterView( {encounter, mitplan, roleOptions, tankOptions}){
    console.log(encounters[encounter][mitplan])
    const phases = encounters[encounter][mitplan];
    return (
        <>
            <h2>{mitplan} {encounter}</h2>
            {phases.map((phase) => {
                return (
                    <PhaseView 
                        phase={phase}
                        roleOptions={roleOptions}
                        tankOptions={tankOptions}
                        key={phase['phase']}
                    />
                );
            })}
        </>
    );
}




//export default Table;