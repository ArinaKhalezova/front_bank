import React, { useState } from 'react';
import './NewStudentsForm.css'

const NewStudentsForm = () => {

    const [inputDateOfBirds, setInputDateOfBirds] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputDateCreateAccount, setInputDateCreateAccount] = useState('');
    const [inputEmail, setinputEmail] = useState('');
    const [inputTelephone, setInputTelephone] = useState('');

    const dateOfBirdsChangeHandler = (event) => {
        setInputDateOfBirds(event.target.value);
    };
    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };
    const dateCreateAccountChangeHandler = (event) => {
        setInputDateCreateAccount(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setinputEmail(event.target.value);
    };
    const telephoneChangeHandler = (event) => {
        setInputTelephone(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const studentsData = {
            name: inputName,
            dateOfBirds: new Date(inputDateOfBirds),
            dateCreateAccount: new Date(inputDateCreateAccount),
            email: inputEmail,
            telephone: inputTelephone
        };

        setInputDateOfBirds('');
        setInputName('');
        setInputDateCreateAccount('');
        setinputEmail('');
        setInputTelephone('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-students__controls">
                <div className="new-students__control">
                    <label>ФИО</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>
                 <div className="new-students__control">
                    <label>Дата рождения</label>
                    <input type="date" value={inputDateOfBirds} min='2000-01-01' step='2010-01-01' onChange={dateOfBirdsChangeHandler}/>
                </div>
                <div className="new-students__control">
                    <label>Дата регестрации</label>
                    <input type="date" value={inputDateOfBirds} min='2000-01-01' step='2024-01-01' onChange={dateCreateAccountChangeHandler}/>
                </div>
                <div className="new-students__control">
                    <label>Почта</label>
                    <input type="email" name="student_email" value={inputEmail} onChange={emailChangeHandler}/>
                </div>
                <div className="new-students__control">
                    <label>Номер телефона</label>
                    <input type="tel" name="tel" value={inputTelephone} onChange={telephoneChangeHandler}></input>
    
                </div>
                <div className="new-students__actions">
                <button type="submit" >Добавить студента</button>
                </div>
            </div>
        </form>
    )
}

export default NewStudentsForm;