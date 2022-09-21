import './NewEntry.css';
import Select from '../components/Select';
import Input from '../components/Input';
import Button from '../components/Button';

import { useState } from 'react';

function NewEntry({toggleModal}){

    let data = JSON.parse(localStorage.getItem('tollList'))
    //console.log(data)
    let optionText, optionValue,val

    // const iterate = (data) => {
    //     Object.keys(data).forEach(key => {

    //     if (typeof data[key] === 'object'  && data[key] !== null) {
    //             iterate(data[key])
                
    //         }
    //         else{
    //             if(key === 'tollName'){
    //                 optionText = `${data[key]}`
    //                 optionValue = `${key}`
    //                 console.log(optionText,optionValue)
                    
    //                 //console.log(`value: ${data[key]}`)
    //                 //document.querySelector('.toll-name').append(new Option(optionText, optionValue))
    //             }
    //             //console.log(`key: ${key}, value: ${data[key]}`)
    //         }
    //     })
    // }
    //console.log(iterate(data))
    //iterate(data)

    const options = []

    function getData(data){
        for(let i=0;i<data.length;i++){
            // console.log(data[i])
            // console.log(data[i].tollName)

            optionText = data[i].tollName
            optionValue = i
            //console.log(optionText,optionValue)
            options.push({optionValue,optionText})
        }
    }
    getData(data);
    console.log(options)

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
            <select name='toll-name'>
                <option value="" disabled selected hidden>Select toll name</option>
                {options.map((option) => (
                    <option value={option.optionValue}>{option.optionText}</option>
                ))}
            </select>

            <label>Select Vehicle Type <span className='star'>*</span></label>
            <Select className={'v-type'}  />

            <label>Vehicle Number <span className='star'>*</span></label>
            <Input type={'number'} placeholder={'Enter your login Id'} />

            <label>Tariff</label>
            <Input placeholder={'Tariff amount'} disabled = {true} />

            <Button id={'add-btn-entry'} onClick={toggleIt}> Add entry </Button>
            </div>
            </div>
        </div>
    )
}

export default NewEntry;
