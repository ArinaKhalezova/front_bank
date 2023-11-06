// import CostItem from "./components/CostItem";

//axios!!!!!!!!!!!!!!!
import PersonList from './components/Axios/PersonList.js';
import PersonAdd from './components/Axios/PersonAdd';
import PersonRemove from './components/Axios/PersonRemove';

import NewStudents from "./components/NewStudents/NewStudents.js";
import StudentsData from "./components/Students/StudentsData.js";

const App = () => {

  const students = [
    {
      birthday: new Date(2004, 12, 15),
      nameStudent: 'Иванчин Михаил',
      specialization: 'Программная инженерия',
      email: 'ivanchin@mail.ru',
      phoneNumber: '+7 (927)-755-99-87'
    },
    {
      birthday: new Date(2004, 8, 31),
      nameStudent: 'Ильин Артемий',
      specialization: 'Вычислительная техника',
      email: 'artem9900samara@mail.ru',
      phoneNumber: '+7 (927)-666-77-87'
    },
    {
      birthday: new Date(2004, 5, 9),
      nameStudent: 'Ладонин Андрей',
      specialization: 'Приборостроение',
      email: 'andreyLadonin.ru@gmail.com',
      phoneNumber: '+7 (927)-700-90-80'
    }
  ];

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
