import { useNavigate } from "react-router-dom";

function ViewToll() {

    const navigate = useNavigate();
    // onClick={() => {navigate(-1);}}
    return (
      <div>ViewToll
      <button onClick={() => {navigate(-1);}}>Submit</button>
      </div>
    )

}

export default ViewToll;