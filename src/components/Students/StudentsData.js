import StudentsItem from "./StudentsItem";
import './StudentsData.css';
import Card from "../UI/Card";

const StudentsData = (props) => {
    return(
        <Card className="students">
            <StudentsItem 
                name={props.students[0].name} 
                dateOfBirds={props.students[0].dateOfBirds}
                email={props.students[0].email}
                telephone={props.students[0].telephone}
                dateCreateAccount={props.students[0].dateCreateAccount}
            />
            <StudentsItem 
                name={props.students[1].name} 
                dateOfBirds={props.students[1].dateOfBirds}
                email={props.students[1].email}
                telephone={props.students[1].telephone}
                dateCreateAccount={props.students[1].dateCreateAccount}
            />
        </Card>
    );
};

export default StudentsData;