import WrapperGrid from "../../Header/WrapperGrid.js";
import Navbar from "../../Header/Navbar.js"
import NewMoreItem from "./NewMoreItem.js";
import OtherNews from "./OtherNews.js";
import Footer from "../../Footer/Footer.js"
import Images from "../../../Images.js";
import "./NewMoreData.css"

const news_details = [
    {
        title: 'Переделываем',
        image: Images.new2,
        text: 'Работая над проектом, мы привыкли слышать друг от друга и руководителей одно слово. Переделывайте. И мы действительно переделываем. Код с нуля. Половину дизайна. И все это напоминает один старый видеорепортаж про Михаила...',
    },
    {
        title: 'Чат с поддержкой',
        image: Images.new1,
        text: 'МВ скором времени наш чат с поддежкой должен начать свою работу. И как пологается, кому-то придется отвечать на ваши сообщения. И этот “Кто-то” - Александр. Саша искренне рад, что именно ему выпала такая честь...',
    },
    {
      title: 'Бета-версия расписания',
      image: Images.new3,
      text: 'В yаши планы так же входит добавление бета версии расписания для студентов, чтобы не переходить с нашего сайта, на сайт вуза. Мы уверены, так всем будет удобнее, кроме того кому придется это делать).',
    },
];

const NewNumbOne= () => {
    return(
        <WrapperGrid>
            <div className="wrap">
                <div className="news-data_navbar">
                    <Navbar/>
                </div>
                <div className="news-data_info">
                    <NewMoreItem 
                        title={news_details[0].title}
                        image={news_details[0].image} 
                        text={news_details[0].text}
                    />
                </div>
                <div>
                    <OtherNews/>
                </div>
            </div>
            <Footer/>
        </WrapperGrid>
    );
};
const NewNumbTwo= () => {
    return(
        <WrapperGrid>
            <div className="wrap">
                <div className="news-data_navbar">
                    <Navbar/>
                </div>
                <div className="news-data_info">
                    <NewMoreItem 
                        title={news_details[1].title}
                        image={news_details[1].image} 
                        text={news_details[1].text}
                    />
                </div>
                <div>
                    <OtherNews/>
                </div>
            </div>
            <Footer/>
        </WrapperGrid>
    );
};
const NewNumbThree= () => {
    return(
        <WrapperGrid>
            <div className="wrap">
                <div className="news-data_navbar">
                    <Navbar/>
                </div>
                <div className="news-data_info">
                    <NewMoreItem 
                        title={news_details[2].title}
                        image={news_details[2].image} 
                        text={news_details[2].text}
                    />
                </div>
                <div>
                    <OtherNews/>
                </div>
            </div>
            <Footer/>
        </WrapperGrid>
    );
};

export {
    NewNumbOne,
    NewNumbTwo,
    NewNumbThree,
} 