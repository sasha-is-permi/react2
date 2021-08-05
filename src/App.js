import React, {Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.scss';

import Main from './Main/Main'
import News from './News/News'
import Profile from './Profile/Profile'


// Создаем компонент-класс
class App extends Component{
    
   render(){
      return(
         <React.Fragment>
           <div className="App"> 


       {/*   Чтобы сделать навигацию без перезагрузки страницы: используем  NavLink */}

         <nav className="nav">
             <ul>
              <li>
               <NavLink to="/"
               exact
               activeClassName={'wfm-active'} // используем не стандартный класс active для активного элемента
               > Главная </NavLink>
              </li>

              <li>
                <NavLink to="/news">Новости</NavLink>
              </li>

              <li>
                <NavLink to="/profile">Профиль</NavLink>
              </li>
            </ul>
         </nav>

          
          {/* При данном пути- переходим в другой компонент */}
          
          <Route path="/" exact component={Main} />
           
          <Route path="/news" component={News} />

          <Route path="/profile" component={Profile} />


           </div>  
         </React.Fragment> 
      )    
    }
}


export default App;
