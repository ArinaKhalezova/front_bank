import Images from "../../../Images";
import "./CardBalance.css"

const CardBalance = () => {
    return(
        <div className="card-balance">
            <div className="card-balance_image">
                <img src={Images.card_front} alt="Card_front" className="card_front-image"/>
            </div>
            <div className="card-balance_info">
                {/* данные через апи */}
                <h1>2790,9 ₽</h1>
                <p>Студенческая 66** **** **** **78</p>
            </div>
        </div>
    )
}

export default CardBalance;