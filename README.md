Задание

Реализовать приложение, которое умеет показывать следующие страницы:

/ - главная
/login - страница ввода логина и пароля
/news - страница с новостями (любая однотипная информация)
/profile - страница с произвольным текстом, недоступная без авторизации
На сайте, в шапке или подвале реализовать ссылки:

Главная (/)
Новости (/news)
Профиль (/profile)


Получение данных- через redux

Оформление (дизайн) — не важно. Сделайте, чтобы можно было комфортно смотреть пример в браузере.





Выполнение


Создана папка на githab для проекта:
https://github.com/sasha-is-permi/react2


create-react-app project2 

npm install --save react-router-dom

 react-router-dom - hoc-компонент, который оборачивает наш компонент для использования router 
 <BrowserRouter>

 В index.js:


 import {BrowserRouter} from 'react-router-dom'



const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

  Подключение использования sass:
  npm install node-sass


ReactDOM.render(application, document.getElementById('root'));
registerServiceWorker();


Чтобы сделать навигацию без перезагрузки страницы: 

import {Route, NavLink} from 'react-router-dom'

Устанавливаем redux:
npm install --save redux 

npm install --save react-redux



