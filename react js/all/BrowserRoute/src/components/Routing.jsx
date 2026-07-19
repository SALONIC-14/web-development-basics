import React from 'react'
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import About from './About';

import Contact from './Contact';
import Navbar from './Navbar';
import Product from './Product';
import Women from './Women';
import Men from './Men';
import Notfound from './Notfound';
import Kids from './Kids';



const Routing = () => {
  return (
    <div>
        
           
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
            <Route path='/product:id' element={<Kids/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
        
      </Routes>
      
    </div>
  )
}

export default Routing
