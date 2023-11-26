import './PoliBankText.css';
import Images from '../../Images';

const PoliBankText = (props) => {
    const classes = 'poliBankText ' + props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
        
    ) 
};

export default PoliBankText;