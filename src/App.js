import React, {Component} from 'react';
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default class App extends Component{
 render() {
   return(
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/' element={<News key='gotonews' pageSize={8} category=''/>}/>
          <Route path='/general' element={<News key='general' pageSize={8} category='general'/>}/>
          <Route path='/sports' element={<News key='sports' pageSize={8} category='sports'/>}/>
          <Route path='/science' element={<News key='science' pageSize={8} category='science'/>}/>
          <Route path='/technology' element={<News key='technology' pageSize={8} category='technology'/>}/>
          <Route path='/health' element={<News key='health' pageSize={8} category='health'/>}/>
        </Routes>
     </BrowserRouter>
   )
 }
}