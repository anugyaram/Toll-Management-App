import Header from '../components/Header';
import Search from '../components/SearchBar';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import AddToll from './AddToll';
import NewEntry from './NewEntry';
import List from '../components/List';

//import { useState } from 'react';

import './Main.css';

function Main(){

    return (
        <div className="Main">
          <Header />
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
          <List/>
        </div>
      );
}

let modal1 = document.querySelector('.show-toll');
let modal2 = document.querySelector('.vehicle-entry');

let showTollEle = () => document.querySelector('.show-toll').style.display = "block";
let vehicleEntryEle = () => document.querySelector('.vehicle-entry').style.display = "block";

window.onclick = (event) => {
    if (event.target === modal1) {
        document.querySelector('.show-toll').style.display = "none";
        
    }
    if(event.target === modal2){
        document.querySelector('.vehicle-entry').style.display = "none";
    }
}

export default Main;

