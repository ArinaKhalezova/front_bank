// import CostItem from "./components/CostItem";

//axios!!!!!!!!!!!!!!!
import PersonList from './components/Axios/PersonList.js';
import PersonAdd from './components/Axios/PersonAdd';
import PersonRemove from './components/Axios/PersonRemove';
import axios from 'axios';

import NewStudents from "./components/NewStudents/NewStudents.js";
import StudentsData from "./components/Students/StudentsData.js";
import React, { useState, useEffect } from 'react';

const App = () => {

  // const students = [
  //   {
  //     name: 'Иванчин Михаил',
  //     dateOfBirds: new Date(2004, 12, 15),
  //     email: 'ivanchin@mail.ru',
  //     telephone: '+7 (927)-745-99-00',
  //     dateCreateAccount: new Date(2022, 12, 15)
  //   },
  //   {
  //     name: 'Ильин Артемий',
  //     dateOfBirds: new Date(2004, 11, 11),
  //     email: 'ARTEM@mail.ru',
  //     telephone: '+7 (927)-755-00-33',
  //     dateCreateAccount: new Date(2022, 11, 11)
  //   }
  // ];

  const [students, sendStudents] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/account/all")
      .then ( (res) => {
        sendStudents(res.data)
        console.log(students)
      })
  }, []);

  return (
   <div>
    {/* axios!!!!!!!!!!!!!!! */}
      <PersonAdd/>
      <PersonList/> 
      <PersonRemove/>
    {/* axios!!!!!!!!!!!!!!! */}
    
      <NewStudents />
      <StudentsData students={students}/>
   </div>
  );
}

export default App;
