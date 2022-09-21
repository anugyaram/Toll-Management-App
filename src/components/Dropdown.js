import './Dropdown.css';

function Dropdown({onChange}){

    let data = JSON.parse(localStorage.getItem('entries'))

    let unique = [...new Set(data.map((entry) =>(
        entry.tollName
    )))]
        //console.log(unique)
    return(
        <div>
            <div>
                <i className='fa fa-filter' onClick={openDropdown}></i>
            </div>
            <div className='drop-down'>
                <select onChange={onChange}>
                    <option className='selected'>All</option>
                    {unique.map((entry) => (  
                        <option>{entry}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

let openDropdown = () => document.querySelector('.drop-down').classList.toggle("visible")



export default Dropdown;