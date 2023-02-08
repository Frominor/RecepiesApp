
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Register from './Components/Register/Register';
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';
import React from 'react';
function App() {
  
  return (
    <div className="App">
      <div className='container'>
     <Routes>
       <Route path='/Register' element={<Register></Register>}></Route>
     </Routes>
       <Header></Header>
       <Main></Main>
      </div>
    </div>
  );
}

export default App;
