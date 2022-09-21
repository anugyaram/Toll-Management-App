import './Dropdown.css';

function Dropdown(){

    let data = JSON.parse(localStorage.getItem('entries'))

    let unique = [...new Set(data.map((entry) =>(
        entry.tollName
    )))]
        console.log(unique)
    return(
        <div>
            <div>
                <i className='fa fa-filter' onClick={openDropdown}></i>
            </div>
            <div className='drop-down'>
                <ul>
                    <li className='selected'>All</li>
                    {unique.map((entry) => (  
                        <li>{entry}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

let openDropdown = () => document.querySelector('.drop-down').classList.toggle("visible")



export default Dropdown;