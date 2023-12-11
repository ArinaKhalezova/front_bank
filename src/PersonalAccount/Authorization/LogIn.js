// import Userfront, { LoginForm, SignupForm } from "@userfront/toolkit/react";
// import { Link } from "react-router-dom";
// import Logout from "./LogOut";
// import WrapperGrid from "../../LandingPage/Header/WrapperGrid.js"
// import "./Login.css";
// import Footer from "../../LandingPage/Footer/Footer.js"


// const Login = () => {
//   Userfront.init("demo1234");
//   return (
//     <div className="login-wrapper">
//       <WrapperGrid>
//         <div className="login-item">
//           <div className="login-form">
          
//             <form class="form-login">
//               <p class="login-title">Вход в личный кабинет</p>
//               <input class="form-item" type="text" placeholder="Username" autofocus/>
//               <input class="form-item" type="password" placeholder="Password" />
//               <button class="form-btn">
//                 <Link className="login-btn" to="/Account">Вход</Link>
//               </button>
//               <a href="#" className="forgot-pass">Забыли пароль?</a>
//             </form>
            
//             {/* <SignupForm /> */}
//             {/* <LoginForm /> */}
//           </div>
//           <div className="login-text">
//             <p>ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк ПолиБанк </p>
//           </div>
//         </div>
//         <Footer/>
//       </WrapperGrid>
//       {/* <Logout/> */}
//     </div>
//   );

// };


// export default Login;


import Userfront, { LoginForm } from "@userfront/toolkit/react";
import Logout from "./LogOut";
import WrapperGrid from "../../LandingPage/Header/WrapperGrid.js"
import "./Login.css";
import Footer from "../../LandingPage/Footer/Footer.js"
import {SignupForm} from "@userfront/toolkit";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")

  const API = axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true,
  });


  const handlerSubmit = (e) => {
    e.preventDefault();

    const data = {
    email,
    password
  }

    API.post("api/auth/login")
    .then(response => {
      localStorage.setItem('jwt', response.data.jwt);
      localStorage.setItem('email', response.data.email)
      localStorage.setItem("name", response.data.name)
      localStorage.setItem("authorities", response.data?.authorities[0].authoritiy)
      localStorage.setItem("dateCreateAccount", response.data.dateCreateAccount)
      navigate("/")
    }
    ).catch(err => {
      setError("Ошибка входа")
    })
  }

  return (
  <div className="login-wrapper">
    <WrapperGrid>
      <div className="login-item">
        <div className="login-form">
          <div className="wrapper">
            <form className="login" onSubmit={handlerSubmit}>
              <p className="title">Log in</p>
              <input type="text" onChange={event => setEmail(event.target.value)} placeholder="Email" autoFocus/>
              <i className="fa fa-user"></i>
              <input onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" />
              <button>
                <i className="spinner"></i>
                <span className="state">Log in</span>
              </button>
            </form>
            <footer><a target="blank" href="http://boudra.me/">boudra.me</a></footer>
          </div>
          {/*<SignupForm />;*/}
          {/*<LoginForm />*/}
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



