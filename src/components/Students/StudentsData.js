import StudentsItem from "./StudentsItem";
import './StudentsData.css';
import Card from "../UI/Card";

const StudentsData = (props) => {
    return(
        <Card className="costs">
            <StudentsItem 
                birthday={props.students[0].birthday} 
                nameStudent={props.students[0].nameStudent}
                specialization={props.students[0].specialization}
                email={props.students[0].email}
                phoneNumber={props.students[0].phoneNumber}
            />
            <StudentsItem 
                birthday={props.students[1].birthday} 
                nameStudent={props.students[1].nameStudent}
                specialization={props.students[1].specialization}
                email={props.students[1].email}
                phoneNumber={props.students[1].phoneNumber}
            />
            <StudentsItem 
                birthday={props.students[2].birthday} 
                nameStudent={props.students[2].nameStudent}
                specialization={props.students[2].specialization}
                email={props.students[2].email}
                phoneNumber={props.students[2].phoneNumber}
            />
        </Card>
    );
};

export default StudentsData;