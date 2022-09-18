import './Select.css';

function Select({className,require}){
    return(
        <div className={className}>
            <select name='vehicle-type' required={require}>
                <option value="" disabled selected hidden>Select vehicle type</option>
                <option value='Car/Jeep/Van'>Car/Jeep/Van</option>
                <option value='LCV'>LCV</option>
                <option value='Truck/Bus'>Truck/Bus</option>
                <option value='Heavy Vehicle'>Heavy vehicle</option>
            </select>
        </div>
    )

}

export default Select;