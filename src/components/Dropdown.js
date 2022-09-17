import './Dropdown.css';

function Dropdown(){
    return(
        <div>
            <i className='fa fa-filter' onClick={openDropdown}></i>
            <div className='dropdown'>
                <ul>
                    <li className='selected'>All</li>
                    <li>Chengalpattu</li>
                </ul>
            </div>
        </div>
    )
}

let openDropdown = () => document.querySelector('.dropdown').classList.toggle("show")



export default Dropdown;