// import CostItem from "./components/CostItem";

//axios!!!!!!!!!!!!!!!
import PersonList from './components/Axios/PersonList.js';
import PersonAdd from './components/Axios/PersonAdd';
import PersonRemove from './components/Axios/PersonRemove';
import axios from 'axios';

import NewStudents from "./components/NewStudents/NewStudents.js";
import StudentsData from "./components/Students/StudentsData.js";
import React, { useState, useEffect } from 'react';

//тест главной страницы
import Header from './Pages/Header/Header.js';
import WrapperGrid from './Pages/Header/WrapperGrid.js';


const App = () => {

// без апи____
  const students = [
    {
      name: 'Иванчин Михаил',
      dateOfBirds: new Date(2004, 5, 5),
      email: 'ivanchin@mail.ru',
      telephone: '+7 (927)-745-99-00',
      dateCreateAccount: new Date(2022, 12, 15)
    },
    {
      name: 'Ильин Артемий',
      dateOfBirds: new Date(2004, 11, 11),
      email: 'ARTEM@mail.ru',
      telephone: '+7 (927)-755-00-33',
      dateCreateAccount: new Date(2022, 11, 11)
    }
  ];

// с апи_____
  // const [students, sendStudents] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/account/all")
  //     .then ( (res) => {
  //       sendStudents(res.data)
  //       console.log(students)
  //     })
  // }, []);

  return (
   <div>
    {/* тест главной страницы */}
    <WrapperGrid>
      <Header/>



      <NewStudents />
      {students.length > 0 ? <StudentsData students={students}/> : <p>Список пуст</p>}

      {/* <StudentsData students={students}/> */}
    </WrapperGrid>
    

    {/* axios!!!!!!!!!!!!!!! */}
      {/* <PersonAdd/>
      <PersonList/> 
      <PersonRemove/> */}
    {/* axios!!!!!!!!!!!!!!! */}
    
      
   </div>
  );
}

export default App;
