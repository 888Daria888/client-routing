import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.css'

function Menu() {
  return (
    <>
      <div className='container'>
        <div>
          <Link className="nav-link" to="/about">О себе</Link></div>
        <div>
          <Link className="nav-link" to="/work">Прием работ</Link>
        </div>
        <div>
          <Link className="nav-link" to="/contacts">Контактная информация</Link></div>
      </div>
      <Routes>
        <Route path='/about' element={<h2>О себе</h2>}></Route>
        <Route path='/work' element={<h2>Прием работы</h2>}></Route>
        <Route path='/contacts' element={<h2>Контактная информация</h2>}></Route>
      </Routes>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
  </BrowserRouter>
);

