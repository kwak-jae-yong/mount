import './App.css'
import Lifecycle from './components/Lifecycle'
import { useState } from 'react'
function App() {

  const [show, setShow]=useState(true)


  return (
    <div>
      <button onClick={()=>setShow(prev=>!prev)}>
        {show? '마운트':'언마운트'}
      </button>
      {show &&  <Lifecycle/>}
     
    </div>
  )
}

export default App
