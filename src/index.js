import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// function formatUser(user){
//   return user.firstName +' '+ user.lastName;
// }
// const user = {
//   firstName: ' Khizar Hayyat Jafar',
//   lastName: ' KHJ'
// };

// function validate(user){
//   if(user){
//     return user.firstName +' '+ user.lastName;
//   }
//   else{
//     return <h1>Strange user</h1>;
//   }
// }
// const element1 = <h1>Hi,{ validate(user)}</h1>;

//Element Creation by JSX
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello World'
)


ReactDOM.render(
 
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
