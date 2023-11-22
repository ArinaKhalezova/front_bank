import "./SupportData.css"
import SupportItem from "./SupportItem";
import SamGTU from "../image/SamGTU.png";

const SupportData = (props) => {
    return(
        <div className="wrap">
            <h1 className="support-header">ПРИ ПОДДЕРЖКЕ САМГТУ</h1>
            <div className="sup-wrap">
                <div className="supports">
                    <div className="support-item">
                        <SupportItem 
                            link={props.supports[0].link}
                            title={props.supports[0].title}
                            image={props.supports[0].image} 
                        />
                        <SupportItem 
                            link={props.supports[1].link}
                            title={props.supports[1].title}
                            image={props.supports[1].image} 
                        />
                        <SupportItem 
                                link={props.supports[2].link}
                                title={props.supports[2].title}
                                image={props.supports[2].image} 
                            />
                            <SupportItem 
                                link={props.supports[3].link}
                                title={props.supports[3].title}
                                image={props.supports[3].image} 
                            />
                    </div>
                    <div className="support-SavGTU">
                        <img src={SamGTU} alt="SamGTU" className="img-SamGTU"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SupportData;