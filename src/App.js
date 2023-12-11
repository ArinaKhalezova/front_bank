import React, { useState, useEffect } from 'react';

import ScrollToTop from './ScrollToTop.js';
// для путей и ссылок
import {NewNumbOne, NewNumbTwo, NewNumbThree} from './LandingPage/News/NewsMore/NewMoreData.js';
import {UpdateNumbOne, UpdateNumbTwo, UpdateNumbThree} from './LandingPage/Updates/UpdatesMore/UpdateMoreData.js';
import Login from './PersonalAccount/Authorization/LogIn.js';
import {Services, News, Updates, Supports} from './LandingPage/Arrays.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ---------------
import Landing from './LandingPage/Landing.js';
import Account from './PersonalAccount/Account/Account.js';

const App = () => {
  return (
   <div>
    <div className='font'>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="*" element={<Landing />} />
            {/* новости */}
            <Route path={News[0].link} element={<NewNumbOne/>}/>
            <Route path={News[1].link} element={<NewNumbTwo/>}/>
            <Route path={News[2].link} element={<NewNumbThree/>}/>
            {/* обновления */}
            <Route path={Updates[0].link} element={<UpdateNumbOne/>}/>
            <Route path={Updates[1].link} element={<UpdateNumbTwo/>}/>
            <Route path={Updates[2].link} element={<UpdateNumbThree/>}/>
            {/* авторизация */}
            <Route path="/logIn" element={<Login/>}/>
            {/* Личный кабинет */}
            <Route path="/Account" element={<Account/>}/>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
   </div>
  );
};

export default App;



  // с апи_____
  // const [students, sendStudents] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/account/all")
  //     .then ( (res) => {
  //       sendStudents(res.data)
  //       console.log(students)
  //     })
  // }, []);

