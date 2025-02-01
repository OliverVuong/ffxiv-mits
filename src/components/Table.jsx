/* eslint-disable react/prop-types */
import p1 from '../data/fru/p1.json'

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

function Table({ roles, selections }) {

    const visible = roles.filter((role) => selections[role]);
    const table = p1[0]['sections'][0]['table'];

    return (
        <>
            <div>Hello, component {JSON.stringify(p1)}</div>
            <div>Visible: {visible}</div>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Time</th>
                        {visible.map((val) => {
                            return <th key={val}>{val}</th>;
                        })}
                    </tr>
                    <Row 
                        data={p1[0]['sections'][0]['table'][0]}
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
        </>
    );
}

export default Table;