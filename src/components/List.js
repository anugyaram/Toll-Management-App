import './List.css';

function List(){
    

    let data = JSON.parse(localStorage.getItem('entries'))


    return(
        <div>
            <table className='list'>
                <thead>
                    <tr>
                        <th>Vehicle Type</th>
                        <th>Vehicle Number</th>
                        <th>Date/Time</th>
                        <th>Toll Name</th>
                        <th>Tariff</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry) => (
                    <tr className='row'>
                    <td>{entry.type}</td>
                    <td>{entry.vNumber}</td>
                    <td>{entry.currTime}</td>
                    <td>{entry.tollName}</td>
                    <td>{entry.tariff}</td>
                    </tr>
                ))}
                </tbody>
        </table>
    </div>
    )
}
export default List;