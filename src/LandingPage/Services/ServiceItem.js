import "../Services/ServiceItem.css"

const ServiceItem = (props) =>{
    return(
        <div className="services">
            <img src={props.image} alt="Service" className="service-image"/>
            <h1 className="service-title">{props.title}</h1>
            <p className="service-text">{props.text}</p>
        </div>
    );
};

export default ServiceItem;