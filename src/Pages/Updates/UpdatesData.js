import UpdateItem from "./UpdateItem.js";
import "../Updates/UpdatesData.css"

const UpdatesData = (props) => {
    return(
        <div className="wrap">
            <h1 className="updates-header">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</h1>
             <div className="updates-item">
            <UpdateItem  
                title={props.updates[0].title}
                read_more={props.updates[0].read_more}
            />
            <UpdateItem 
                title={props.updates[1].title}
                read_more={props.updates[1].read_more}
            />
            <UpdateItem 
                title={props.updates[2].title}
                read_more={props.updates[2].read_more}
            />
            </div>
        </div>
    );
};

export default UpdatesData;