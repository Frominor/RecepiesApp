
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import { Route,Routes } from 'react-router-dom';
import React from 'react';
import MyBookOfRecepies from './Components/MyBookOfRecepies/MyBookOfRecepies';
import AboutDish from './Components/AboutDish/AboutDish';
function App() {
  
  return (
    <div className="App">
      <div className='container'>
      <Header></Header>
     <Routes>
      <Route path='MyBookOfRecepies' element={<MyBookOfRecepies></MyBookOfRecepies>}></Route>
      <Route path='AboutDish' element={<AboutDish></AboutDish>}></Route>
      <Route path='/' element={ <Main></Main>}></Route>
      
     </Routes>
      </div>
    </div>
  );
}

export default App;
