import './NewEntry.css';
import Select from '../components/Select';
import Input from '../components/Input';
import Button from '../components/Button';

import { useState } from 'react';

function NewEntry({toggleModal}){

    let data = JSON.parse(localStorage.getItem('tollList'))

    const [val,setValue] = useState('');
    const [type,setType] = useState('');
    const [id,setId] = useState('')
    const [t,setTariff] = useState('')

    let tollName,optionText, optionValue,tariff

    for(let j=parseInt(val);j<=parseInt(val);j++){
        tollName = data[j].tollName
    }

    let entries = {
        tollName:tollName,
        type: type,
        vNumber: id,
        tariff: t
    };

    const options = []

    function getData(data){
        for(let i=0;i<data.length;i++){
            //console.log(data[i])
            //console.log(data[i].tollName)
            optionText = data[i].tollName
            optionValue = i
            options.push({optionValue,optionText})
            
        } 


        for(let i=parseInt(val);i<=parseInt(val);i++){
            for(let j=0;j<4;j++){
                if(data[i][j].type === type){
                    tariff = data[i][j].s
                }
                //console.log(data[i][j])
            }
        }
        console.log(tariff)
    }
    getData(data);

    let vehicleNo = (e) => {
        setId(e.target.value)

        setTariff(tariff)
    }
    
    let handle = () => {        
        let data = localStorage.getItem('entries');
        data = data ? JSON.parse(data) : [];
        data.push(entries);

        localStorage.setItem('entries', JSON.stringify(data));

        toggleIt();
    };


    const [isOpen, setIsOpen] = useState(true);
    let toggleIt = () => {
        setIsOpen(false);
        toggleModal();
    }   

    return(
        <div className='show' onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        open={isOpen}>
        <div className='new-entry'>
            <span onClick={toggleIt} className='close'>&times;</span>
            <h3>Add new Entry</h3>

            <div className='form'>
            <label>Select Toll Name <span className='star'>*</span></label>
            <select className='toll-name'onChange={(e) => setValue(e.target.value)}>
                <option value="" disabled selected hidden>Select toll name</option>
                {options.map((option) => (
                    <option value={option.optionValue} >{option.optionText}</option>
                ))}
            </select>

            <label>Select Vehicle Type <span className='star'>*</span></label>
            <Select className={'v-type'} onChange={(e) => setType(e.target.value)} />

            <label>Vehicle Number <span className='star'>*</span></label>
            <Input placeholder={'Enter your login Id'} onChange={vehicleNo} />

            <label>Tariff</label>
            <Input placeholder={'Tariff amount'} disabled = {true} value={tariff} />

            <Button id={'add-btn-entry'} onClick={handle}> Add entry </Button>
            </div>
            </div>
        </div>
    )
}

export default NewEntry;
