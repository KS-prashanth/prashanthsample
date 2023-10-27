import Excersise5 from "./e5";
import Excersise6 from "./e6";
import { Link } from "react-router-dom";
import {Routes, Route} from "react-router";
import Nav from "../nav";


function Excersises() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route index
        element={<Excersise5/>}/>
        <Route path="e6" element={<Excersise6/>}/>
      </Routes>
    </div>
  );
}

export default Excersises;