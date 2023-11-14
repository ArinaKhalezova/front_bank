import "../News/NewItem.css"

const NewItem = (props) =>{
    return(
        <div className="news">
            <h1 className="new-title">{props.title}</h1>
            <p className="new-text">{props.text}</p>
            <a href="/news" className="new-read_more">{props.read_more}</a>
        </div>
    );
}
export default NewItem;