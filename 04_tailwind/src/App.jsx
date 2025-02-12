
import './App.css'
import Card from './components/card'

const flower1={
  id:1,
  price:100,
  name:"Rose",
  source:"./1.jpg"
}

const flower2={
  id:2,
  price:150,
  name:"Lotus",
  source:"./2.jpg"
}

const flower3={
  id:3,
  price:200,
  name:"Lily",
  source:"./3.jpg"
}

function App() {
  return (
    <>
   <Card flower={flower1}/>
   <Card flower={flower2}/>
   <Card flower={flower3}/>
   
   
    </>
  )
}

export default App
