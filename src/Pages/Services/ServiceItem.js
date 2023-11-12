import Service1 from "../image/Service1.png";
import "../Services/ServiceItem.css"

const ServiceItem = (props) =>{
    return(
        <div className="services">
            <img src={Service1} alt="Service1" className="service-image"/>
            <h1 className="service-title">{props.title}</h1>
            <p className="service-text">{props.text}</p>
        </div>
    );
}
export default ServiceItem;