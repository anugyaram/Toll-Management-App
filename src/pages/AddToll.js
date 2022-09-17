import './AddToll.css';

function AddToll(){
    return(
        <div>
            <h2>Add new Toll</h2>
            <div className='form'>
                <form>
                    <label>Toll Name</label><span>*</span>
                    <input type='text' placeholder='Enter toll name' id='name' />
                    <label>Vehicle Fare Details</label><span>*</span>
                    
                </form>
            </div>
        </div>
    )
}

export default AddToll;