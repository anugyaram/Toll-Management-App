import './Input.css';

function Input({placeholder, type,id,className,onChange, disabled,required}){
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
            <input className="custom-input" 
            placeholder={placeholder} 
            type={inputType} 
            id={id} 
            onChange={onChange}
            disabled={disabled} 
            required={required}
             />
        </div>
    )
}

export default Input;