import './Input.css';

function Input({placeholder, type,id,className, disabled,required}){
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
            <input className="custom-input" placeholder={placeholder} type={inputType} id={id} disabled={disabled} required={required} />
        </div>
    )
}

export default Input;