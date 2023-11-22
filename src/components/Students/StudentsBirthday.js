import './Dates.css'

const StudentsBirthday = (props) => {
    // const norm_date = new Date(props.date)
    // const month = norm_date.getMonth();
    // const year = norm_date.getFullYear();
    // const day = norm_date.getDay();
    const month = props.date.toLocaleString("ru-RU", {month: "2-digit"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("ru-RU", {day: "2-digit"});

    return (
        <div className='date'>
            <h1>Дата рождения:</h1>
            <div className='students-date__day'>{day}.</div>
            <div className='students-date__month'>{month}.</div>
            <div className='students-date__year'>{year}г.</div>
        </div>
    ); 
};

export default StudentsBirthday;