import './Input.css';

function Input({placeholder, size, type}){
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
        <div>
            <input className="custom-input" placeholder={placeholder} type={inputType} />
        </div>
    )
}

export default Input;