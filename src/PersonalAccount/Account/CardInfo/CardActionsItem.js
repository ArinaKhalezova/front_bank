import "./CardActionsItem.css"

const CardActionsItem = (props) => {
    return(
        <div className="card-actions">
            <p className="card-actions_text">{props.action}</p>
        </div>
    );
};

export default CardActionsItem;