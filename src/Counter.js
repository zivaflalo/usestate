import {useState} from "react"
function Cuonter() {
    const [count, setCount] = useState(1);
    const [delta, setDelta] = useState(1)
   

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta;
            }
        )
    }
    function reset(){
        setCount(
            function(oldCount){
                return oldCount = 0;
            }
        )
    }
    function handleDelta(e){
        setDelta(Number(e.target.value))

    }
    

    
    return (
      <div>
        <h1>counter</h1>
        <input type="number" value={delta} onChange = {handleDelta}/>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta}</button>
        <br></br>
        <button onClick={reset}>Reset to 0</button>
      </div>
    );
  }
  
  export default Cuonter;