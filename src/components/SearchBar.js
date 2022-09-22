import './SearchBar.css';

function Search({onChange,data,placeholder}){
    return(
        <div className='search-box'>
            <i className='fa fa-search'></i>
            <input type="text" placeholder={placeholder} id="search" onChange={onChange} data={data}/>
        </div>
    )
}

export default Search;