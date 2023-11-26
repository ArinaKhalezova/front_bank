import CardInformation from "./CardInfo/CardInformation";
import StudentInformation from "./StudentInfo/StudentInformation";
import Navbar from "../../LandingPage/Header/Navbar";
import Footer from "../../LandingPage/Footer/Footer";
import WrapperGrid from "../../LandingPage/Header/WrapperGrid";
import "./Account.css"

const Account = () => {
    return(
        <div className="account-wrap">
            <WrapperGrid>
                <div className="account-navbar">
                    <Navbar/>
                </div>
                <div className="account__item">
                    <div className="account__student">
                        <StudentInformation/>
                    </div>
                    <div className="account__card">
                        <CardInformation/>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </WrapperGrid>
        </div>
    )
}

export default Account;