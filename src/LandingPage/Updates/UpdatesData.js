import UpdateItem from "./UpdateItem.js";
import "../Updates/UpdatesData.css"

const UpdatesData = (props) => {
    return(
        <div className="wrap">
            <a name="updates"></a>
            <h1 className="updates-header">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</h1>
             <div className="updates-item">
            <UpdateItem  
                title={props.Updates[0].title}
                read_more={props.Updates[0].read_more}
                link={props.Updates[0].link}
            />
            <UpdateItem 
                title={props.Updates[1].title}
                read_more={props.Updates[1].read_more}
                link={props.Updates[1].link}
            />
            <UpdateItem 
                title={props.Updates[2].title}
                read_more={props.Updates[2].read_more}
                link={props.Updates[2].link}
            />
            </div>
        </div>
    );
};

export default UpdatesData;