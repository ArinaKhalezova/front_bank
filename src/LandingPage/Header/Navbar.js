import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navigation">
            <a href="/" className="bank-name">ПолиБанк</a>
            <nav>
                <ul className="navigation-item">
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#news">Новости</a></li>
                    <li><a href="#updates">Обновления</a></li>
                    <li><a href="#currencies">Валюты</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
            </nav>
            <Link className="login" to="/logIn">LogIn</Link>
            {/* <a href="/" className="login">LogIn</a> */}
        </div>

    );
}


export default Navbar;