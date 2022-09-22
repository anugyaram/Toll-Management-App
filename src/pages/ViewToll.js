import Header from '../components/Header';
import Search from '../components/SearchBar';
import Button from '../components/Button';
import AddToll from './AddToll';
import NewEntry from './NewEntry';
import TollList from '../components/TollList';
import './ViewToll.css';

import { useState } from 'react';

import { useNavigate } from "react-router-dom";

function ViewToll() {

    const navigate = useNavigate();

    let data = JSON.parse(localStorage.getItem('entries'))
    const [filterData, setFilter] = useState(data)

    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);

    const handleOpenModal1 = () => {
        setOpenModal1(!openModal1);

    }

    const handleOpenModal2 = () => {
        setOpenModal2(!openModal2);

    }

    const handleOption = (e) => {
        let word = e.target.value;
        let newFilter = data.filter((value) =>{
            return value.tollName.toLowerCase().includes(word.toLowerCase());
        });
        //console.log(word)
        setFilter(newFilter);
    }

    return (
      <div className="view">
        <Header />
        <div className='nav'>
                <div className='objects'>
                    <div>
                        <p>Tollgate List</p>
                    </div>
                    <div>
                        <Search placeholder={'Search Tollgate'} onChange={handleOption} />
                    </div>
                </div>
                <div className='buttons'>
                    <div className='button' >
                        <Button onClick={handleOpenModal2}>Add vehicle entry</Button>
                    </div>
                    <div className='button' >
                        <Button onClick={handleOpenModal1}>Add new toll</Button>
                    </div>
                    <div className='button'>
                        <Button onClick={() => {navigate(-1);}}>Back to Vehicle logs</Button>
                    </div>
                </div>
            </div>
            <div >
                {openModal1 &&<AddToll toggleModal={handleOpenModal1}/>}
            </div>
            <div >
                {openModal2 &&<NewEntry toggleModal={handleOpenModal2} />}
            </div>

            <TollList data={filterData} />
      </div>
    )

}

export default ViewToll;