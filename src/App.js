import { useState } from "react";
import Datafatch from "./API/Datafatch";
import './App.css';

function App() {

  const [inpVal,setinpVal] = useState('bookName')
  const [info,setinfo] = useState('')


  return (
    <div className="App">

      <form onSubmit={(evt)=>{
        evt.preventDefault()
        setinpVal(evt.target[0].value)
        evt.target[0].value = ""
      }} >

        <input type="text" className="input"/>  
        <button className="searchBtn">Search</button>
      
      </form>
      <div className="flex">
        <Datafatch inpVal={inpVal} setinfo={setinfo} />
        {info}
      </div>
      
    </div>
  );
}

export default App;
