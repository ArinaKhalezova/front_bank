import {Services, News, Updates, Supports} from './Arrays.js';
import WrapperGrid from './Header/WrapperGrid.js';
import Header from './Header/Header.js';
import ServicesData from './Services/ServicesData.js';
import NewsData from './News/NewsData.js';
import UpdatesData from './Updates/UpdatesData.js';
import Currencies from './Currencies/Currencies.js';
import SupportData from './Support/SupportData.js';
import Footer from './Footer/Footer.js';
import PoliBankText from './Header/PoliBankText.js';

const Landing = () => {
    return(
        <div>
            <WrapperGrid>
                <Header/>
                <ServicesData Services={Services}/>
                <PoliBankText>
                    <NewsData News={News}/>
                    <UpdatesData Updates={Updates}/>
                    <Currencies/>
                </PoliBankText>
                <SupportData Supports={Supports}/>
                <Footer/>
            </WrapperGrid>
        </div>
    );
};

export default Landing;