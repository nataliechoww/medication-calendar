import './App.css';
import React from 'react'
import Home from './pages/home'
import Calendar from './pages/calendar'
import Addmedication from './pages/addmedication'
import Navbar from './components/navbar.js'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/addmedication' element={<Addmedication/>}/>
          <Route exact path='/calendar' element={<Calendar/>}/>
        </Routes>
        
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
