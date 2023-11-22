import ServiceItem from "./ServiceItem";
import "../Services/ServicesData.css"

const ServicesData = (props) => {
    return(
        <div className="wrap">
            <h1 className="services-header">ПРЕДЛОЖЕНИЯ БАНКА</h1>
             <div className="services-item">
            <ServiceItem 
                image={props.services[0].image} 
                title={props.services[0].title}
                text={props.services[0].text}
            />
            <ServiceItem 
                image={props.services[1].image} 
                title={props.services[1].title}
                text={props.services[1].text}
            />
            <ServiceItem 
                image={props.services[2].image} 
                title={props.services[2].title}
                text={props.services[2].text}
            />
            <ServiceItem 
                image={props.services[3].image} 
                title={props.services[3].title}
                text={props.services[3].text}
            />
            </div>
        </div>
    );
};

export default ServicesData;