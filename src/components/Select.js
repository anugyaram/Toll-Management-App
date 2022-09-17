import './Select.css';

function Select({size}){
    let w = ""
    return(
        <div>
            <select name='vehicle-type' style={{width: w}}>
                <option value="" disabled selected hidden>Select vehicle type</option>
                <option value='Car/Jeep/Van'>Car/Jeep/Van</option>
                <option value='LCV'>LCV</option>
                <option value='Truck/Bus'>Truck/Bus</option>
                <option value='Heavy Vehicle'>Heavy vehicle</option>
            </select>
        </div>
    )

    // switch(size){
    //     case "small":
    //         w = "30%";
    //         break;
    //     case "large":
    //         w = "700px";
    //         break;
    //     default:
    //         w = "33%";
    //         break;
    // }
}

export default Select;