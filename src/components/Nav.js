import './Nav.css';
import Search from './SearchBar';

function Nav(){
    return(
        <div className='nav'>
            <div>
                <p>Toll entries/Vehicle entries</p>
            </div>
            <div><i className='fa fa-filter'></i></div>
            <div>
                <Search/>
            </div>
            {/* <div>
                <Buttons />
            </div> */}
        </div>

    )
}

export default Nav;