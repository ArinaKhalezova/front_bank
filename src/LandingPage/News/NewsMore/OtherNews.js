import NewsData from "../NewsData.js";
import { News } from '../../Arrays.js';

const OtherNews = () => {
    return(
        <div>
           <NewsData News={News}/>
        </div>
    );
};

export default OtherNews;