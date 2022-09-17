
import './Button.css';

function Button({size, onClick, type, id, children}){
    let wi = "";

    // switch(size){
    //     case "large":
    //         wi = "500px";
    //         break;
    //     default:
    //         wi = "200px";
    //         break;
    // }
    return(
        <div>
            <button style={{maxWidth: wi}} onclick = {onClick} type={type} id = {id}>
                {children}
            </button>
        </div>
    )
}

export default Button;