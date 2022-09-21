import './SearchBar.css';

function Search({onChange,data}){
    return(
        <div className='search-box'>
            <i className='fa fa-search'></i>
            <input type="text" placeholder="Search vehicle" id="search" onChange={onChange} data={data}/>
        </div>
    )
}

export default Search;