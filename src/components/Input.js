import './Input.css';

function Input({placeholder, type,id,className}){
    let inputType = "";


    // Type...
    switch (type) {
        case "name":
            inputType = "text";
            break;
        case "number":
            inputType = "number";
            break;
        default:
            inputType = "text";
            break;
    }

    return(
        <div className={className}>
            <input className="custom-input" placeholder={placeholder} type={inputType} id={id}/>
        </div>
    )
}

export default Input;