import './List.css';

function List(){

    return(
        <div>
            <table className='list'>
                <thead>
                    <tr>
                        <th>Vehicle Type</th>
                        <th>Vehicle Number</th>
                        <th>Date/Time</th>
                        <th>Toll Number</th>
                        <th>Tariff</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vehicle Type</td>
                        <td>Vehicle Number</td>
                        <td>Date/Time</td>
                        <td>Toll Number</td>
                        <td>Tariff</td>
                    </tr>
                </tbody>
        </table>
        <hr/>
    </div>
    )
}
export default List;