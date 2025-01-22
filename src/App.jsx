import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Typography, Splitter } from 'antd';
import dayjs from 'dayjs';
import './App.css';
import Main from './assets/Main'
import Login from './assets/Login';
import Menu from './pages/test/Menu';
import Menu1 from './pages/test/Menu1';
import Menu2 from './pages/test/Menu2';
import Menu3 from './pages/test/Menu3';
import MainPage from './pages/test/MainPage';



const { Text } = Typography;


function App() {
  const [logInStat, setLogInStat] = useState(false);

  useEffect(() => {
    const sessionLogin = sessionStorage.getItem('logInStat') === 'true';
    setLogInStat(sessionLogin);
  }, []);

  var now = dayjs();
  var afterDay = now.add(3, 'day');
  console.log('now :' + now.format('YYYY-MM-DD'));
  console.log('now :' + afterDay.format('YYYY-MM-DD'));


  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 경로 */}
        <Route path="/Login" element={<Login/>}/>
         {/* 로그인 후 화면 */}
        <Route path="/" element = {<Main/>}>
          {/* 추가적인 경로를 정의 */}
          <Route path='Main' element = {<MainPage/>}/>
          <Route path="Menu" element={<Menu />} />
          <Route path="Menu1" element={<Menu1 />} />
          <Route path="Menu2" element={<Menu2 />} />
          <Route path="Menu3" element={<Menu3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;