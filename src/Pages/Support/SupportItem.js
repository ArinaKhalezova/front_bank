import "./SupportItem.css"

const SupportItem = (props) => {
    return(
        <div className="support-place">
            <a href={props.link} target="" className="support-title">{props.title}</a>
            <img src={props.image} alt="Support" className="support-image"/>
        </div>
    )
}

export default SupportItem;