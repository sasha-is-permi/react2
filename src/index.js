import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'


// BrowserRouter -  hoc-компонент, который оборачивает наш компонент для использования router 
const app = (
   <BrowserRouter> 
     <App/>   
   </BrowserRouter>
)


ReactDOM.render(app,  document.getElementById('root') );

reportWebVitals();
