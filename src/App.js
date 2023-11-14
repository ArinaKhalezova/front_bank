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
import ServicesData from './Pages/Services/ServicesData.js';
import Images from './Pages/Images.js';
import NewsData from './Pages/News/NewsData.js';
import UpdatesData from './Pages/Updates/UpdatesData.js';

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

  const services = [
    {
      image: Images.service1,
      title: 'Банковские карты',
      text: 'Мы предлагаем пользователям выпуск именных дебетовых карт для удобного повседневного пользования'
    },
    {
      image: Images.service2,
      title: 'Система СамКоинов',
      text: 'В личном кабинете ведется учет особой валюты ВУЗа - СамКоина. Информацию об обмене вы можете найти в личном кабинете'
    },
    {
      image: Images.service3,
      title: 'Личный Кабинет',
      text: 'У каждого пользователя есть свой личный кабинет, в котором он может найти много полезной информации'
    },
    {
      image: Images.service4,
      title: 'Бесплатное обслуживание',
      text: 'Услуги нашего банка абсолютно бесплатны для наших пользователей'
    },
];

const news = [
  {
    title: '"Всё по новой!"',
    text: 'Слово, которое чаще всего звучит в нашем коллективе',
    read_more: 'Читать далее...'
  },
  {
    title: 'Чат с поддержкой',
    text: 'Мы тоже рады, что Саша будет отвечать на ваши сообщения!',
    read_more: 'Читать далее...'
  },
  {
    title: 'Бета-версия расписания',
    text: 'В разработке находится раздел с  расписанием, для вашего удобства',
    read_more: 'Читать далее...'
  },
];

const updates = [
  {
    title: 'Вкладка “Стипендия”',
    read_more: 'Читать далее...'
  },
  {
    title: 'Код работает!',
    read_more: 'Читать далее...'
  },
  {
    title: 'Чат с поддержкой',
    read_more: 'Читать далее...'
  },
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
    <div className='font'>
    <WrapperGrid>
      <Header/>
      <ServicesData services={services}/>
      <NewsData news={news}/>
      <UpdatesData updates={updates}/>
      
      <NewStudents />
      {students.length > 0 ? <StudentsData students={students}/> : <p>Список пуст</p>}

      {/* <StudentsData students={students}/> */}
    </WrapperGrid>
    </div>
    
    

    {/* axios!!!!!!!!!!!!!!! */}
      {/* <PersonAdd/>
      <PersonList/> 
      <PersonRemove/> */}
    {/* axios!!!!!!!!!!!!!!! */}
    
      
   </div>
  );
}

export default App;
