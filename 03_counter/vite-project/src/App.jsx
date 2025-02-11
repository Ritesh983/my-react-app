
import './App.css'
import { useState } from 'react'  

function App() {
//let counter=15;
const [counter, setCounter] = useState(15);

const increaseVal = () => { 
  if(counter<20){
     setCounter(counter+1);

    //  setCounter((counter)=>counter+1);
    //  setCounter((counter)=>counter+1);
    //  setCounter((counter)=>counter+1);
    //  setCounter((counter)=>counter+1);
    
    
}
else{
  setCounter(20);
}
}

const decreaseVal = () => { 
  if(counter>0){
      setCounter(counter-1);
     // console.log(counter);
}
else{
  setCounter(0);
}
}
  return (
    <>
      <h1>Ritesh's counter App</h1>
      <h2>counter:{counter} </h2>
      <button onClick={increaseVal}>Increase</button>
      <br />
      <button onClick={decreaseVal}>Decrease</button>
    </>
  )
}

export default App
