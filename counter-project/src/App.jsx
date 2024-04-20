import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  if(count < 0){
    setCount(0);
  }
  if(count>20){
    setCount(20);
  }
  return (
    <>
     <h1> Counter App </h1>
     <p>Counter value: {count} </p>
     <button onClick={()=>{
      setCount(count+1);
     }}>
      Increment Value
     </button>
     <br/>
     <button onClick={()=>{
      setCount(count-1);
     }}>
      Decrement Value
     </button>
  
    </>
  )
}

export default App
