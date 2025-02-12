import { useState } from 'react'
import './App.css'

function App() {
const [color, setColor] = useState('red');

  function changeColor (color) {
    setColor(color);
  }
  return (
    <>
    <div className={`${color} container`}>
     <button onClick={()=>changeColor('blue')}type="button" class="btn btn-primary">Blue</button>
<button onClick={()=>changeColor('grey')}type="button" class="btn btn-secondary">Grey</button>
<button onClick={()=>changeColor('green')} type="button" class="btn btn-success">Green</button>
<button onClick={()=>changeColor('red')} type="button" class="btn btn-danger">Red</button>
<button onClick={()=>changeColor('yellow')} type="button" class="btn btn-warning">Yellow</button>
<button onClick={()=>changeColor('skyblue')} type="button" class="btn btn-info">Sky blue</button>
<button onClick={()=>changeColor('white')} type="button" class="btn btn-light">Light</button>
<button onClick={()=>changeColor('black')} type="button" class="btn btn-dark">Dark</button>
</div>
    </>
  )
}

export default App
