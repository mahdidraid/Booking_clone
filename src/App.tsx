import { useState } from 'react'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";


import './App.css'
import Home from './Pages/Home';
import List from './List/List';
import Hotel from './Hotel/Hotel';

function App() {


  return (
    <BrowserRouter>
   
   <Routes>
        <Route path="/"  element={<Home></Home>}/>  
        <Route path='hotle' element={<List></List>}/>
        <Route path='hotles/:id' element={<Hotel></Hotel>}/>
      </Routes>

  </BrowserRouter>
  )
}

export default App
