import WrapperGrid from "../../Header/WrapperGrid.js";
import Navbar from "../../Header/Navbar.js"
import UpdateMoreItem from "./UpdateMoreItem.js";
import OtherUpdates from "./OtherUpdates.js";
import Footer from "../../Footer/Footer.js"
import Images from "../../../Images.js";
import "./UpdateMoreData.css"

const updates_details = [
    {
        title: 'Вкладка “Стипендия”',
        image: Images.updates2,
        text: 'На нашем сайте появился новый отдел “Стипендия”. В нём вы можете узнать свою стипендию, надбавки, а так же дату выплаты Вы можете перейти прямо туда. Стипендия',
    },
    {
        title: 'Код работает!',
        image: Images.updates1,
        text: 'Как вы знаете, Банк не работал бы без кода, которым у нас занимаются несколько человек. Мы задали вопрос нашему программисту - Артемию.В каком состоянии находится код?-На мой взгляд и в целом, всё работает. Мы продолжаем совершенствовать его и добавлять новый функции.',
    },
    {
      title: 'Чат с поддержкой и вопросы',
      image: Images.updates3,
      text: 'При пользовании различными услугами, у нас часто возникают вопросы, которые некому звдвть. Не переживайте, мы создали для вас вкалдку с часто задаваемыми вопросами пользователей. Но даже если вы не смогли найти ответ на ваш вопрос - Обратитесь в нашу поддержку.',
    },
];

const UpdateNumbOne = () => {
    return(
        <WrapperGrid>
            <div className="wrap">
                <div className="news-data_navbar">
                    <Navbar/>
                </div>
                <div className="news-data_info">
                    <UpdateMoreItem 
                        title={updates_details[0].title}
                        image={updates_details[0].image} 
                        text={updates_details[0].text}
                    />
                </div>
                <div>
                    <OtherUpdates/>
                </div>
            </div>
            <Footer/>
        </WrapperGrid>
    );
};
const UpdateNumbTwo = () => {
    return(
        <WrapperGrid>
            <div className="wrap">
                <div className="news-data_navbar">
                    <Navbar/>
                </div>
                <div className="news-data_info">
                    <UpdateMoreItem 
                        title={updates_details[1].title}
                        image={updates_details[1].image} 
                        text={updates_details[1].text}
                    />
                </div>
                <div>
                    <OtherUpdates/>
                </div>
            </div>
            <Footer/>
        </WrapperGrid>
    );
};
const UpdateNumbThree = () => {
    return(
        <WrapperGrid>
            <div className="wrap">
                <div className="news-data_navbar">
                    <Navbar/>
                </div>
                <div className="news-data_info">
                    <UpdateMoreItem 
                        title={updates_details[2].title}
                        image={updates_details[2].image} 
                        text={updates_details[2].text}
                    />
                </div>
                <div>
                    <OtherUpdates/>
                </div>
            </div>
            <Footer/>
        </WrapperGrid>
    );
};

export {
    UpdateNumbOne,
    UpdateNumbTwo,
    UpdateNumbThree,
} 