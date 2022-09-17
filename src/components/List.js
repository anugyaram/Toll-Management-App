import './List.css';

function List(){

    return(
        <div>
            <div className='list-header'>
                <ul>
                    <li>Vehicle Type</li>
                    <li>Vehicle Number</li>
                    <li>Date/Time</li>
                    <li>Toll Number</li>
                    <li>Tariff</li>
                </ul>
            </div>
            <div className='list-content'>
                <ul>
                    <li>Vehicle Type</li>
                    <li>Vehicle Number</li>
                    <li>Date/Time</li>
                    <li>Toll Number</li>
                    <li>Tariff</li>
                </ul>
                <hr/>
        </div>
    </div>
    )
}
export default List;