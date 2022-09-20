import './AddToll.css';
import Select from '../components/Select';
import Input from '../components/Input';
import Button from '../components/Button';

import { useState } from 'react';

function AddToll({toggleModal}){

    const [tollName, setTollName] = useState('');

    const [type1, setType1 ] = useState('');
    const [s1, setS1 ] = useState('');
    const [r1, setR1 ] = useState('');

    const [type2, setType2 ] = useState('');
    const [s2, setS2 ] = useState('');
    const [r2, setR2 ] = useState('');

    const [type3, setType3 ] = useState('');
    const [s3, setS3 ] = useState('');
    const [r3, setR3 ] = useState('');

    const [type4, setType4 ] = useState('');
    const [s4, setS4 ] = useState('');
    const [r4, setR4 ] = useState('');

    let tollN =
        {
            tollName:tollName
        };
    let toll = [
        {
            type: type1,
            s: s1,
            r:r1
        },
        {
            type: type2,
            s: s2,
            r:r2
        },
        {
            type: type3,
            s: s3,
            r:r3
        },
        {
            type: type4,
            s: s4,
            r:r4
        }
    ]
    let tollList = {
        ...tollN,
        ...toll
    }
    

    let handle = () => {
        
        let data = localStorage.getItem('tollList');

        data = data ? JSON.parse(data) : [];

        data.push(tollList);

        localStorage.setItem('tollList', JSON.stringify(data));

        toggleIt();
    }; 

    const [isOpen, setIsOpen] = useState(true);
    let toggleIt = () => {
        setIsOpen(false);
        toggleModal();
    }


    return(
        <div id="show-toll" onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        open={isOpen}>
        <div className='add-toll'>
            <span onClick={toggleIt} className='close'>&times;</span>
            <h3>Add new Toll</h3>
            
            <div className='form'>
                <label>Toll Name <span className='star'>*</span></label>
                <Input placeholder={'Enter toll name'} className={'name'} required={true}
                onChange={(e) => setTollName(e.target.value)} 
                />

                <label>Vehicle Fare Details <span className='star'>*</span></label>
                <div className='type'>
                    <Select className={'select'} onChange={(e) => setType1(e.target.value)} />
                    <Input placeholder={'Single Journey'} type={'number'} className={'input'} onChange={(e) => setS1(e.target.value)} />
                    <Input placeholder={'Return Journey'} type={'number'} className={'input'} onChange={(e) => setR1(e.target.value)}/>
                </div>
                <div className='type'>
                    < Select className={'select'} onChange={(e) => setType2(e.target.value)} />
                    <Input placeholder={'Single Journey'} type={'number'} className={'input'} onChange={(e) => setS2(e.target.value)}/>
                    <Input placeholder={'Return Journey'} type={'number'} className={'input'} onChange={(e) => setR2(e.target.value)}/>                    
                </div>
                <div className='type'>
                    < Select className={'select'} onChange={(e) => setType3(e.target.value)} />
                    <Input placeholder={'Single Journey'} type={'number'} className={'input'} onChange={(e) => setS3(e.target.value)}/>
                    <Input placeholder={'Return Journey'} type={'number'} className={'input'} onChange={(e) => setR3(e.target.value)}/>                    
                </div>
                <div className='type'>
                    < Select className={'select'} onChange={(e) => setType4(e.target.value)} />
                    <Input placeholder={'Single Journey'} type={'number'} className={'input'} onChange={(e) => setS4(e.target.value)}/>
                    <Input placeholder={'Return Journey'} type={'number'} className={'input'} onChange={(e) => setR4(e.target.value)}/>                   
                </div>
                <Button id={'add-btn'} onClick={handle}> Add details </Button>
            </div>    
        </div>
        </div>
    )


}


export default AddToll;