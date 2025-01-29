import p1 from '../data/fru/p1.json'

//const data = JSON.parse(p1);

function Table() {

    return (
        <>
            <div>Hello, component {JSON.stringify(p1)}</div>
            <table>
                <tr>
                    <th></th>
                    <th>T1</th>
                    <th>T2</th>
                    <th>SCH</th>
                </tr>
                <tr>
                    <th>Cyclonic Break 1</th>
                    <td>Reprisal + Party Mit</td>
                </tr>
            </table>
        </>
    );
}

export default Table;