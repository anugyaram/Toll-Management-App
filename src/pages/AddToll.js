import './AddToll.css';
import Select from '../components/Select';
import Input from '../components/Input';
import Button from '../components/Button';

function AddToll(){
    return(
        <div className='add-toll'>
            <h3>Add new Toll</h3>
            
            <div className='form'>
                <label>Toll Name <span className='star'>*</span></label>
                <Input placeholder={'Enter toll name'} className={'name'} id={'name'}  />

                <label>Vehicle Fare Details <span className='star'>*</span></label>
                <div className='type'>
                    <Select className={'select'} />
                    <Input placeholder={'Single Journey'} type={'number'} className={'input'} />
                    <Input placeholder={'Return Journey'} type={'number'} className={'input'} />
                </div>
                <div className='type'>
                    < Select className={'select'} />
                    <Input placeholder={'Single Journey'} type={'number'} className={'input'} />
                    <Input placeholder={'Return Journey'} type={'number'} className={'input'} />                    
                </div>
                <div className='type'>
                    < Select className={'select'} />
                    <Input placeholder={'Single Journey'} type={'number'} className={'input'} />
                    <Input placeholder={'Return Journey'} type={'number'} className={'input'} />                    
                </div>
                <div className='type'>
                    < Select className={'select'} />
                    <Input placeholder={'Single Journey'} type={'number'} className={'input'} />
                    <Input placeholder={'Return Journey'} type={'number'} className={'input'} />                   
                </div>
                <Button id={'add-btn'} > Add details </Button>
            </div>    
        </div>
    )
}


export default AddToll;