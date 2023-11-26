import CardActionsData from "./CardActionsData";
import CardBalance from "./CardBalance";

import "./CardInformation.css"

const CardInformation = () => {
    const cardActions = [
        {
            action: 'Оплатить или перевести',
        },
        {
            action: 'История платежей',
        },
        {
            action: 'О карте',
        },
        {
            action: 'Настройки',
        },
    ]
    return(
        <div className="card-information">
            <div>
                <CardBalance/>
            </div>
            <div>
                <CardActionsData cardActions={cardActions}/>
            </div>
        </div>
    )
}

export default CardInformation;