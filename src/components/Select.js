import './Select.css';

function Select({className,require,onChange}){
    return(
        <div className={className} onChange={onChange}>
            <select name='vehicle-type' required={require}>
                <option value="" disabled selected>Select vehicle type</option>
                <option value='Car/Jeep/Van'>Car/Jeep/Van</option>
                <option value='LCV'>LCV</option>
                <option value='Truck/Bus'>Truck/Bus</option>
                <option value='Heavy Vehicle'>Heavy vehicle</option>
            </select>
        </div>
    )

}

export default Select;