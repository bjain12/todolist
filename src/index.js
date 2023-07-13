import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllTasks from './AllTasks';
import Middlepage from './MiddlepageTop';
import Mainpage from './Mainpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes>
      <Route path ='/' element = {<Mainpage />} />
      <Route path ='/AllTasks' element = {<AllTasks />} />
      <Route path ='/Middlepage' element = {<Middlepage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
