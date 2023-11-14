import "../Updates/UpdateItem.css"

const UpdateItem = (props) =>{
    return(
        <div className="updates">
            <h1 className="update-title">{props.title}</h1>
            <a href="/updates" className="new-read_more">{props.read_more}</a>
        </div>
    );
}
export default UpdateItem;