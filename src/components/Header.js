import './Header.css';
import Search from './SearchBar';
import Button from './Button';
import Dropdown from './Dropdown';
import AddToll from '../pages/AddToll';
import NewEntry from '../pages/NewEntry';

function Header(){
    return(
        <div className="heading">
            <p>Toll Management Application</p>
            <hr/>
            <div className='nav'>
                <div className='objects'>
                    <div>
                        <p>Toll entries/Vehicle entries</p>
                    </div>
                    <div>
                        <Dropdown/>
                    </div>
                    <div>
                        <Search/>
                    </div>
                </div>
                <div className='buttons'>
                    <div className='button' >
                        <Button onClick={vehicleEntryEle}>Add vehicle entry</Button>
                    </div>
                    <div className='button' >
                        <Button onClick={showTollEle}>Add new toll</Button>
                    </div>
                    <div className='button'>
                        <Button>View all tolls</Button>
                    </div>
                </div>
            </div>
            <div className='show-toll'>
                <AddToll />
            </div>
            <div className='vehicle-entry'>
                <NewEntry />
            </div>
        </div>
    )
}

let modal1 = document.querySelector('.show-toll');
let modal2 = document.querySelector('.vehicle-entry');

let showTollEle = () => document.querySelector('.show-toll').style.display = "block";
let vehicleEntryEle = () => document.querySelector('.vehicle-entry').style.display = "block";

window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    if(event.target === modal2){
        modal2.style.display = "none";
    }
}

export default Header;