import ServiceItem from "./ServiceItem";
import "../Services/ServicesData.css"

const ServicesData = (props) => {
    console.log(props)
    return(
        <div className="wrap">
            <a name="services"></a>
            <h1 className="services-header">ПРЕДЛОЖЕНИЯ БАНКА</h1>
             <div className="services-item">
            <ServiceItem 
                image={props.Services[0].image} 
                title={props.Services[0].title}
                text={props.Services[0].text}
            />
            <ServiceItem 
                image={props.Services[1].image} 
                title={props.Services[1].title}
                text={props.Services[1].text}
            />
            <ServiceItem 
                image={props.Services[2].image} 
                title={props.Services[2].title}
                text={props.Services[2].text}
            />
            <ServiceItem 
                image={props.Services[3].image} 
                title={props.Services[3].title}
                text={props.Services[3].text}
            />
            </div>
        </div>
    );
};

export default ServicesData;