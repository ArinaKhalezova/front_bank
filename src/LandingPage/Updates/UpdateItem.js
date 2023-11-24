import "../Updates/UpdateItem.css"
import { Link } from "react-router-dom";

const UpdateItem = (props) =>{
    return(
        <div className="updates">
            <h1 className="update-title">{props.title}</h1>
            <Link className="new-read_more" to={props.link}>{props.read_more}</Link>
        </div> 
    );
}
export default UpdateItem;