import './SearchBar.css';

function Search(){
    return(
        <div className='search-box'>
            <i className='fa fa-search'></i>
            <input type="text" placeholder="Search vehicle" id="search" />
        </div>
    )
}

export default Search;