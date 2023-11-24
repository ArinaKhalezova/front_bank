import './WrapperGrid.css';

const WrapperGrid = (props) => {
    const classes = 'wrap-grid ' + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default WrapperGrid;