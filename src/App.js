import React,{useState} from 'react';
import './App.css';
//Adding back components
import Nav from './components/Nav';
import Tweeter from './components/Tweeter';


function App() {
  //Write JS code here
  let [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(true);

  const incrementer = () => {
    setCounter(counter + 1);
    console.log(counter)
    console.log(useState)
  } 

  const togglerMaster = () => {
    setToggle(toggle => !toggle)
    console.log(toggle);
  }

  return (
    <div className="app">
      <h1>Git This Bread</h1>
      <div className="home">
        <Nav toggle={toggle}/>
        <Tweeter counter={counter} number={incrementer} setToggle={togglerMaster}/>
      </div>
    </div>
  );
}

export default App;
