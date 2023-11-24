import NewItem from "./NewItem";
import "../News/NewsData.css"

const NewsData = (props) => {
    return(
        <div className="wrap">
            <a name="news"></a>
            <h1 className="news-header">ПОСЛЕДНИЕ НОВОСТИ</h1>
             <div className="news-item">
            <NewItem 
                title={props.News[0].title}
                text={props.News[0].text}
                read_more={props.News[0].read_more}
                link={props.News[0].link}
            />
            <NewItem 
                title={props.News[1].title} 
                text={props.News[1].text}
                read_more={props.News[1].read_more}
                link={props.News[1].link}
            />
            <NewItem 
                title={props.News[2].title} 
                text={props.News[2].text}
                read_more={props.News[2].read_more}
                link={props.News[2].link}
            />
            </div>
        </div>
    );
};

export default NewsData;