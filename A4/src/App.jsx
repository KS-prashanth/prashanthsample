import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Library imports
import {BrowserRouter} from "react-router-dom";
import  {Routes, Route} from "react-router-dom";

// CUSTOM COMPONENTS
import Exercises from "./Exercises";
import HelloWorld from "./Exercises/e5/hello-world.jsx";
import Tuiter from "./tuiter";

function App() {

  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route index element={<Exercises/>} />
                <Route path="/hello" element={<HelloWorld/>} />
                <Route path="/tuiter/*" element={<Tuiter/>} />
            </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
