// import CostItem from "./components/CostItem";

// import NewStudents from "./components/NewStudents/NewStudents.js";
// import StudentsData from "./components/Students/StudentsData.js";

import React, { useState, useEffect } from 'react';

//тест главной страницы
import Header from './Pages/Header/Header.js';
import WrapperGrid from './Pages/Header/WrapperGrid.js';
import ServicesData from './Pages/Services/ServicesData.js';
import Images from './Pages/Images.js';
import NewsData from './Pages/News/NewsData.js';
import UpdatesData from './Pages/Updates/UpdatesData.js';
import Currencies from './Pages/Currencies/Currencies.js';
import SupportData from './Pages/Support/SupportData.js';
import Footer from './Pages/Footer/Footer.js';

const App = () => {

// без апи____
const students = [
  {
    name: 'Иванчин Михаил',
    dateOfBirds: new Date(2004, 5, 5),
    email: 'ivanchin@mail.ru',
    telephone: '+7 (927)-745-99-00',
    dateCreateAccount: new Date(2022, 10, 7)
  },
  {
    name: 'Ильин Артемий',
    dateOfBirds: new Date(2004, 9, 1),
    email: 'ARTEM@mail.ru',
    telephone: '+7 (927)-755-00-33',
    dateCreateAccount: new Date(2022, 9, 4)
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

const supports = [
  {
    link: 'https://samgtu.ru/',
    title: 'Официальный сайт СамГТУ',
    image: Images.support1,    
  },
  {
    link: 'https://samgtu.ru/#:~:text=278%2D43%2D11-,rector%40samgtu.ru,-%D0%9E%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B2%D1%8F%D0%B7%D1%8C',
    title: 'Почта',
    image: Images.support2,    
  },
  {
    link: 'https://vk.com/samgtu_officiall',
    title: 'Сообщество ВКонтакте',
    image: Images.support3,    
  },
  {
    link: 'https://t.me/samgtu',
    title: 'Телеграмм канал СамГТУ',
    image: Images.support4,    
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
      <Currencies/>
      <SupportData supports={supports}/>
      <Footer/>
    </WrapperGrid>
      
      
      {/* <NewStudents />
      {students.length > 0 ? <StudentsData students={students}/> : <p>Список пуст</p>} */} 

      {/* <StudentsData students={students}/> */}
    
    </div>
   </div>
  );
}

export default App;
