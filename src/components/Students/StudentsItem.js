import './StudentsItem.css';
import StudentsBirthday from "./StudentsBirthday";
import DateCreateAccount from "./DateCreateAccount";
import Wrap from '../UI/Wrap';


const StudentsItem = (props) => {

    return (
        <Wrap className='students-item'>
            <div className='students-item__description'>
                <h1>{props.name}</h1>
                <StudentsBirthday date={props.dateOfBirds}/> 
                <DateCreateAccount date={props.dateCreateAccount}/> 
            </div>
            <div className='students-item__description'>
                <h2>{props.email}</h2>
                <h3>{props.telephone}</h3>
            </div>
        </Wrap>
    );
};

export default StudentsItem;