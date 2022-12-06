
import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  function handelDelta (e) {
    setDelta(Number(e.target.value))
         
        }
        
  const [maxi, setmax] = useState(1)
  function handlemax (emax) {
    setmax(Number(emax.target.value))

  }

  return (
    <div className="App">
      <h1> set maximum number:</h1>

      <input type= "number" value = {maxi} onChange = {handlemax}/>
      <h3> The max is {maxi} </h3>
      <h1> set the delta :</h1>
      <input type= "number" value = {delta} onChange = {handelDelta}/>
      <Counter delta={delta} maxi={maxi}/>
      <Counter delta={delta} maxi={maxi}/>
    </div>
  );
}

export default App;