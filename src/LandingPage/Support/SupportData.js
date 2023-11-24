import "./SupportData.css"
import SupportItem from "./SupportItem";
import SamGTU from "../image/SamGTU.png";

const SupportData = (props) => {
    return(
        <div className="wrap">
            <a name="contacts"></a>
            <h1 className="support-header">ПРИ ПОДДЕРЖКЕ САМГТУ</h1>
            <div className="sup-wrap">
                <div className="supports">
                    <div className="support-item">
                        <SupportItem 
                            link={props.Supports[0].link}
                            title={props.Supports[0].title}
                            image={props.Supports[0].image} 
                        />
                        <SupportItem 
                            link={props.Supports[1].link}
                            title={props.Supports[1].title}
                            image={props.Supports[1].image} 
                        />
                        <SupportItem 
                                link={props.Supports[2].link}
                                title={props.Supports[2].title}
                                image={props.Supports[2].image} 
                            />
                            <SupportItem 
                                link={props.Supports[3].link}
                                title={props.Supports[3].title}
                                image={props.Supports[3].image} 
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