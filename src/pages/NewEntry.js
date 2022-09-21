import './NewEntry.css';
import Select from '../components/Select';
import Input from '../components/Input';
import Button from '../components/Button';

import { useState } from 'react';

function NewEntry({toggleModal}){

//     let data = JSON.parse(localStorage.getItem('tollList'))
//     console.log(data)
//     let val = ""
//     function getData(){
//     const iterate = (data) => {
//         Object.keys(data).forEach(key => {
    
//         //console.log(`key: ${key}, value: ${data[key]}`)
//         if(key === 'tollName'){
//             console.log(`value: ${data[key]}`)
//             val = `${data[key]}`
//             const para = document.createElement("p");
//             para.innerText = "This is a paragraph";
//             document.body.appendChild(para);
//         }
//         if (typeof data[key] === 'object' && data[key] !== null) {
//                 iterate(data[key])
//             }
//         })
//     }
//     console.log(iterate(data))
// }
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
            <select name='toll-name' >
                <option value="" disabled selected hidden>Select toll name</option>
                <option value='Chengalpet'>Chengalpat</option>
                <option value='Guindy'>Guindy</option>
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
