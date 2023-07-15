
//import './App.css';
// import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'
// import Login from './pages/login/Login';
// import Chat from './pages/chat/Chat';

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' exact Component={Login}/>
//       <Route path='/chat' Component={Chat}/>
//     </Routes>
//     </BrowserRouter>
    
    
//   );
// }

// export default App;

import React from 'react'
import Main from "./componenets/products/Main"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
