import Images from "../../../Images";
import "./StudentInformation.css"
const StudentInformation = () => {
    return(
        <div className="student-info_item">
            <div className="student-info_photo">
                {/* через апи данные */}
                <img src={Images.student_photo} alt="Student-photo" className="student_photo-image"/>
            </div>
            <div className="student-info_text">
                {/* через апи данные */}
                <p>Халезова Арина Андреевна</p>
                <p>04.08.2004</p>
                <p>2-ИАИТ-119</p>
            </div>
        </div>
    )
}

export default StudentInformation;