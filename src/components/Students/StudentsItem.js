import './StudentsItem.css';
import StudentsBirthday from "./StudentsBirthday";
import Card from '../UI/Card';
import React, { useState } from 'react';

const StudentsItem = (props) => {

    return (
        <Card className='cost-item'>
            <div className='cost-item__description'>
                <StudentsBirthday date={props.birthday}/> 
                <h2>{props.nameStudent}</h2>
                <h2>{props.email}</h2>
            </div>
            <div className='cost-item__description'>
                <h2 className='cost-item__price'>{props.specialization}</h2>
                <h3 className='cost-item__price'>{props.phoneNumber}</h3>
            </div>
        </Card>
    );
};

export default StudentsItem;