// import logo from './logo.svg';
import Excersises from './excercises';
import HelloWorld from './excercises/e5/hello-world';
import Tuiter from './tuiter';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import { Routes, Route} from 'react-router';

function App() {
  return (
    // <BrowserRouter>
    // <div className="container">
    //   <Routes>
    //     <Route index element={<Excersises/>}/>
    //     {/* <Route path= "/Excersises" element={<Excersises/>}/> */}
    //     <Route path= "/Tuiter" element={<Tuiter/>}/>
    //     <Route path= "/HelloWorld" element={<HelloWorld/>}/>
    //   {/* <h1>My React App</h1>
    //   <HelloWorld/>
    //   <Excersises/>
    //   <Tuiter/> */}
    //   </Routes>
    // </div>
    // </BrowserRouter>
    // <BrowserRouter>
    //   <div>
    //     <Excersises/>
    //   </div>
    // </BrowserRouter>
  //   <BrowserRouter>
  //   <div className='container'>
  //     <Routes>
  //       <Route  path="/tuiter/*" element={<Tuiter/>}/>
  //     </Routes>
  //   </div>
  // </BrowserRouter>
  <BrowserRouter>
      <div>
      <Tuiter/>
    </div>
  </BrowserRouter>
  );
}

export default App;
