import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './components/routes/Home';
import Navbar from './components/Navbar'
import Login from './components/Login';
import Aboutus  from "./components/aboutus.js";
import SignUp from "./components/Signup";


import reportWebVitals from './reportWebVitals';

import { Switch, BrowserRouter, Routes, Route, Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/aboutus" element={<Aboutus />} />
              <Route exact path="/Signup" element={<SignUp />} />
            </Routes>
        </div>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
