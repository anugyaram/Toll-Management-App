import './Header.css';
import Nav from './Nav';

function Header(){
    return(
        <div className="heading">
            <p>Toll Management Application</p>
            <hr/>
            <Nav/>
        </div>
    )
}
export default Header;