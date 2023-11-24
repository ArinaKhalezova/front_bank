import {Services, News, Updates, Supports} from './Arrays.js';
import WrapperGrid from './LandingPage/Header/WrapperGrid.js';
import Header from './LandingPage/Header/Header.js';
import ServicesData from './LandingPage/Services/ServicesData.js';
import NewsData from './LandingPage/News/NewsData.js';
import UpdatesData from './LandingPage/Updates/UpdatesData.js';
import Currencies from './LandingPage/Currencies/Currencies.js';
import SupportData from './LandingPage/Support/SupportData.js';
import Footer from './LandingPage/Footer/Footer.js';

const Landing = () => {
    return(
        <div>
            <WrapperGrid>
                <Header/>
                <ServicesData Services={Services}/>
                <NewsData News={News}/>
                <UpdatesData Updates={Updates}/>
                <Currencies/>
                <SupportData Supports={Supports}/>
                <Footer/>
            </WrapperGrid>
        </div>
    );
};

export default Landing;