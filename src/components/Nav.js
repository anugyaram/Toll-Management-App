import './Nav.css';
import Search from './SearchBar';
import Button from './Button';
import Dropdown from './Dropdown';


function Nav(){
    return(
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
                    <Button>Add vehicle entry</Button>
                </div>
                <div className='button'>
                    <Button>Add new toll</Button>
                </div>
                <div className='button'>
                    <Button>View all tolls</Button>
                </div>
            </div>
        </div>

    );
}


export default Nav;