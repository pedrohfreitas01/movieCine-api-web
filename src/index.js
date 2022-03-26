import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Details from './pages/Details';
import Home from './pages/Home';
import Start from './pages/Start'
import PopTv from './pages/PopOnTv'
import PopDetails from './pages/PopOnTv/popDetails/popDetails';


//===================MAIN

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}></Route>
      <Route path ="/PopTv" element={<PopTv/>}></Route>
      <Route path ="/details/:id" element={<Details/>}></Route>
      <Route path ="/PopDetails/:id" element={<PopDetails/>}></Route>
      <Route path="/start" element={<Start/>}></Route>
    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);

