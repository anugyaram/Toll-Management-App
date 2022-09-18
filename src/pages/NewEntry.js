import './NewEntry.css';
import Select from '../components/Select';
import Input from '../components/Input';
import Button from '../components/Button';

function NewEntry(){
    return(
        <div className='new-entry'>
            <h3>Add new Entry</h3>

            <div className='form'>
            <label>Select Toll Name <span className='star'>*</span></label>
            <select name='toll-name' >
                <option value="" disabled selected hidden>Select toll name</option>
                <option value='Chengalpet'>Chengalpet</option>
                <option value='Guindy'>Guindy</option>
            </select>

            <label>Select Vehicle Type <span className='star'>*</span></label>
            <Select className={'v-type'}  />

            <label>Vehicle Number <span className='star'>*</span></label>
            <Input type={'number'} placeholder={'Enter your login Id'} />

            <label>Tariff</label>
            <Input placeholder={'Tariff amount'} disabled = {true} />

            <Button id={'add-btn-entry'} > Add entry </Button>
            </div>
            
        </div>
    )
}

export default NewEntry;
