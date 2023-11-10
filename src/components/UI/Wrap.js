import './Wrap.css';

const Wrap = (props) => {
    const classes = 'wrap ' + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default Wrap;