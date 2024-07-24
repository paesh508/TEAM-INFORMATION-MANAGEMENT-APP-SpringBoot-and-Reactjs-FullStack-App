import './App.css'
import React from 'react'
import AddEmployee from './Components/AddEmployee'
import ListAllEmployee from './Components/ListAllEmployee'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import UpdateEmployee from './Components/UpdateEmployee';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import About from './Components/About';
export default function App() {
  return (
    <>
   
     
      <Router>
        <Navbar/>
      <div>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/employees" Component={ListAllEmployee}></Route>
          <Route path="/add-employee" Component={AddEmployee}/>
          <Route path="/edit-employee/:id" Component={UpdateEmployee}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
        </div>
      </Router>
   
    </>
  )
}
