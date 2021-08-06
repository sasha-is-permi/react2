import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom' //для использования react-router
import {createStore} from 'redux' // импортируем функцию createStore для использования store
import {Provider} from 'react-redux' // оборачиваеем приложение в тег Provider чтобы показать что работаем с redux
import rootReducer from './redux/rootReducer' // импортируем функцию rootReducer из js файла


const store = createStore(rootReducer) // создаем store. rootReducer- это фактически правило для изменения state (rootReducer - функция, изменяющая state)

// BrowserRouter -  hoc-компонент, который оборачивает наш компонент для использования router 
const app = (
   <BrowserRouter>    
     <Provider store={store}> {/* Передаем store в компонент App. store создается функцией createStore() используя функцию rootReducer  */}
       <App/>   
     </Provider>

   </BrowserRouter>
)


ReactDOM.render(app,  document.getElementById('root') );

reportWebVitals();
