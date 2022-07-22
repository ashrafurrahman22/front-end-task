import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Men from './Pages/Men/Men';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Women from './Pages/Women/Women';

const App = () => {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/men' element={<Men></Men>}></Route>
        <Route path='/women' element={<Women></Women>}></Route>
        <Route path='/kids' element={<Women></Women>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default App;