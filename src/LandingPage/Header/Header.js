import Navbar from "./Navbar";
import Card from "../../image/Card.png";
import './Header.css'

const Header = () => {
    return (
        <div className="wrap">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="header-wrapper">
                <div className="card">
                    <img src={Card} alt="Card" className="card-image"/>
                </div>
                <div className="header-discription">
                    <h1 className="header-title">Добро пожаловать!</h1>
                    <p className="header-text">Полибанк - проект, созданный студентами СамГТУ для обучающихся в нашем ВУЗе. Вы можете поддержать наш проект и присоединиться к нашей команде.</p>
                </div>
            </div>

            {/* <div className="card">
                <img src={Card} alt="Card" className="card-image"/>
            </div>
            <div className="header-discription">
                <h1 className="header-title">Добро пожаловать в ПолиБанк</h1>
                <p className="header-text">Мы разработали специальный продукт для студентов СамГТУ, чтобы сделать ваше обслуживание ещё комфортнее</p>
            </div> */}
        </div>
    );
}

export default Header;