import CardActionsItem from "./CardActionsItem";
import "./CardActionsData.css"

const CardActionsData = (props) => {
   
    return(
        <div className="card-actions__item">
            <CardActionsItem
                action={props.cardActions[0].action}
            />
            <CardActionsItem
                action={props.cardActions[1].action}
            />
            <CardActionsItem
                action={props.cardActions[2].action}
            />
            <CardActionsItem
                action={props.cardActions[3].action}
            />
        </div>
    )
}

export default CardActionsData;