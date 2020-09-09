import React,{useState} from 'react';
import './App.css';

function App() {
  let [isDay , setDay] = useState(false)
  return (
    <div className={`Box ${isDay ? "dayTime" : " "}`}>
          <h1>Good {isDay?'Morning':'Night'}</h1>
          <button onClick={()=>setDay(!isDay)} >Update Day</button>
    </div>
  );
}

export default App;
