import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Post APP</h1>
     <Posts>

     </Posts>
    </>
  )
}

export default App
