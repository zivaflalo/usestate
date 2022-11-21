import {useState} from "react"
function Cuonter() {
    const [count, setCount] = useState(0);
   

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1;
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
    

    
    return (
      <div>
        <h1>counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add 1</button>
        <br></br>
        <button onClick={reset}>Reset to 0</button>
      </div>
    );
  }
  
  export default Cuonter;