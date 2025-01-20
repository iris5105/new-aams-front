import React from 'react';
import './App.css';
import Login from './assets/Login.jsx';
import Main from './assets/Main.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
</BrowserRouter>
  );
}

export default App;
