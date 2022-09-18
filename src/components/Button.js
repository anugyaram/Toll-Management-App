
import './Button.css';

function Button({onClick, type, id, children}){

    return(
        <div>
            <button onClick ={onClick} type={type} id = {id}>
                {children}
            </button>
        </div>
    )
}

export default Button;