import './Header.css';
import Search from './SearchBar';
import Button from './Button';
import Dropdown from './Dropdown';
import AddToll from '../pages/AddToll';

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
                    <div className='button'>
                        <Button >Add vehicle entry</Button>
                    </div>
                    <div className='button' onClick={showTollEle}>
                        <Button>Add new toll</Button>
                    </div>
                    <div className='button'>
                        <Button>View all tolls</Button>
                    </div>
                </div>
            </div>
            <div className='show-toll'>
                <AddToll />
            </div>
        </div>
    )
}

let modal = document.querySelector('.show-toll');

let showTollEle = () => document.querySelector('.show-toll').style.display = "block";

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
export default Header;