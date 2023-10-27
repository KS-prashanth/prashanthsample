import { Link } from "react-router-dom";


function HelloWorld() {
  return (
    <div>
    <Link to="/Excersises">Excersises</Link>,
    <Link to="/Tuiter">Tuiter</Link>,
    <h1>Hello World!</h1>
    </div>
  );
}

export default HelloWorld;