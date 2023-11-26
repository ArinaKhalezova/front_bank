import Userfront, { LoginForm } from "@userfront/toolkit/react";
import Logout from "./LogOut";
import WrapperGrid from "../../LandingPage/Header/WrapperGrid.js"
import "./Login.css";
import Footer from "../../LandingPage/Footer/Footer.js"


const Login = () => {
  Userfront.init("demo1234");
  return (
    <div className="login-wrapper">
      <WrapperGrid>
        <div className="login-item">
          <div className="login-form">
            <LoginForm />
          </div>
          <div className="login-text">
            <p>ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк </p>
          </div>
        </div>
        <Footer/>
      </WrapperGrid>
      {/* <Logout/> */}
    </div>
  );

};


export default Login;



