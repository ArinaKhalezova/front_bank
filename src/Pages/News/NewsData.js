import NewItem from "./NewItem";
import "../News/NewsData.css"

const NewsData = (props) => {
    return(
        <div>
            <h1 className="news-header">ПОСЛЕДНИЕ НОВОСТИ</h1>
             <div className="news-item">
            <NewItem 
                title={props.news[0].title}
                text={props.news[0].text}
                read_more={props.news[0].read_more}
            />
            <NewItem 
                title={props.news[1].title} 
                text={props.news[1].text}
                read_more={props.news[1].read_more}
            />
            <NewItem 
                title={props.news[2].title} 
                text={props.news[2].text}
                read_more={props.news[2].read_more}
            />
            </div>
        </div>
    );
};

export default NewsData;