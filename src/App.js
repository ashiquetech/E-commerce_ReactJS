
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
import Login from "./componenets/register/Login";
import Sighup from "./componenets/register/Sighup";
import Home from "./componenets/register/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
