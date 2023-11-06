import './Dates.css'

const DateCreateAccount = (props) => {
    const month = props.date.toLocaleString("ru-RU", {month: "2-digit"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("ru-RU", {day: "2-digit"});

    return (
        <div className='date'>
            <h1>Дата регистрации:</h1>
            <div className='students-date__day'>{day}.</div>
            <div className='students-date__month'>{month}.</div>
            <div className='students-date__year'>{year}г.</div>
        </div>
    ); 
};

export default DateCreateAccount;