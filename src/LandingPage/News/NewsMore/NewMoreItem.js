import "./NewMoreItem.css"

const NewMoreItem = (props) => {
    return(
        <div className="">
            <h1 className="new-more_title">{props.title}</h1>
            <div className="new-more_info">
                <img className="new-more_image" src={props.image} alt="photo-news"/>
                <p className="new-more_text">{props.text}</p>
            </div>
        </div>
    );
};

export default NewMoreItem;