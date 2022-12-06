import { useState } from "react";
function Counter(props) {
    const{delta} = props
    const{maxi} = props
    const [count, setCount] = useState(1)
    
    function inc () {
        setCount(
            function(oldCount){
                if (oldCount + delta > maxi) {
                    return 0
                }
                return oldCount + delta
            }
        )
        console.log(count)
    }
    function Reset () {
        setCount(0)
            }

        console.log(count)
   
    return (
      <div> 
        <h1 className='primary'> Counter</h1>
       
        <p>Counter is at {count} </p>
        
        <button onClick={inc} className = 'button-64'>
            <span class="text">
                Click to add {delta} to Counter
            </span>
        </button>
        <p> 
        <button onClick={Reset}> Click to reset the Counter</button>
        </p>
      </div>
    );
  }
  
  export default Counter;