import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FechttApi from './components/FechttApi'
import reportWebVitals from './reportWebVitals';






const root = ReactDOM.createRoot(document.getElementById('root'));
// function Contador(){

//   const state = useState()

//   console.log(state)

//   let cont = 10
//   return(
//     <div>
//       <h1>Contador : {cont}</h1>
//     <button onClick={() =>{
//       cont = cont + 10
//     }}>
//       Sumar
//     </button>
//     </div>
//   )
// }
root.render(


  <React.StrictMode>
    <App />
   <FechttApi/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
