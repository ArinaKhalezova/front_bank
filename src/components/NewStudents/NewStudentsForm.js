import React, { useState } from 'react';
import './NewStudentsForm.css'

const NewStudentsForm = () => {

    const [inputBirthday, setInputBirthday] = useState('');
    const [inputNameStudent, setInputNameStudent] = useState('');
    const [inputSpecialization, setInputSpecialization] = useState('');
    const [inputEmail, setinputEmail] = useState('');
    const [inputPhoneNumber, setPhoneNumber] = useState('');

    const birthdayChangeHandler = (event) => {
        setInputBirthday(event.target.value);
    };
    const nameStudentChangeHandler = (event) => {
        setInputNameStudent(event.target.value);
    };
    const specializationChangeHandler = (event) => {
        setInputSpecialization(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setinputEmail(event.target.value);
    };
    const phoneNumberChangeHandler = (event) => {
        setPhoneNumber(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const studentsData = {
            birthday: new Date(inputBirthday),
            nameStudent: inputNameStudent,
            specialization: inputSpecialization,
            email: inputEmail,
            phoneNumber: inputPhoneNumber
        };

        setInputBirthday('');
        setInputNameStudent('');
        setInputSpecialization('');
        setinputEmail('');
        setPhoneNumber('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                 <div className="new-cost__control">
                    <label>Дата рождения</label>
                    <input type="date" value={inputBirthday} min='2000-01-01' step='2010-01-01' onChange={birthdayChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>ФИО</label>
                    <input type="text" value={inputNameStudent} onChange={nameStudentChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Почта</label>
                    <input type="email" name="student_email" value={inputEmail} onChange={emailChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Номер телефона</label>
                    <input type="tel" name="tel" value={inputPhoneNumber} onChange={phoneNumberChangeHandler}></input>
    
                </div>
                 <div className="new-cost__control">
                    <label>Специализация</label>
                    <input type="text" value={inputSpecialization} onChange={specializationChangeHandler}/>
                </div>
                
                
                <div className="new-cost__actions">
                <button type="submit" >Добавить студента</button>
                </div>
            </div>
        </form>
    )
}

export default NewStudentsForm;