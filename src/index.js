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

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello World'
// )

//Props
function Welcome(props){
  return <h1>Welcome, {props.name} </h1>
}
function App(){
  return( 
  <div>
    <Welcome name="Ali"/>
    <Welcome name="Azam"/>
    <Welcome name="Jahangir"/>
    <Welcome name="Amir"/>
    <Welcome name="Jahangir"/>
  </div>
 );
}
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
