import Images from '../Images.js';

const Services = [
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

const News = [
  {
    link: '/new1',
    title: '"Всё по новой!"',
    text: 'Слово, которое чаще всего звучит в нашем коллективе',
    read_more: 'Читать далее...'
  },
  {
    link: '/new2',
    title: 'Чат с поддержкой',
    text: 'Мы тоже рады, что Саша будет отвечать на ваши сообщения!',
    read_more: 'Читать далее...'
  },
  {
    link: '/new3',
    title: 'Бета-версия расписания',
    text: 'В разработке находится раздел с  расписанием, для вашего удобства',
    read_more: 'Читать далее...'
  },
];

const Updates = [
  {
    link: '/update1',
    title: 'Вкладка “Стипендия”',
    read_more: 'Читать далее...'
  },
  {
    link: '/update2',
    title: 'Код работает!',
    read_more: 'Читать далее...'
  },
  {
    link: '/update3',
    title: 'Чат с поддержкой',
    read_more: 'Читать далее...'
  },
];
  
const Supports = [
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

export {
  Services,
  News,
  Updates,
  Supports
}