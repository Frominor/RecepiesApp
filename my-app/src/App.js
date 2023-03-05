
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
     <Route  path='/' index element={ <Main></Main>}></Route>
      <Route path='mybookofrecepies' element={<MyBookOfRecepies></MyBookOfRecepies>}></Route>
      <Route path='aboutdish' element={<AboutDish></AboutDish>}></Route>
      
      
     </Routes>
      </div>
    </div>
  );
}

export default App;
