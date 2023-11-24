import "../News/NewItem.css"
import { Link } from "react-router-dom";

const NewItem = (props) =>{
    return(
        <div className="news">
            <h1 className="new-title">{props.title}</h1>
            <p className="new-text">{props.text}</p>
            <Link className="new-read_more" to={props.link}>{props.read_more}</Link>
        </div>
    );
}
export default NewItem;