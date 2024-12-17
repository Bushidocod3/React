import { useState } from 'react'
import UpperLower from "./components/UpperLower.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>UpperLower App</h1>
        <UpperLower />
    </div>
  )
}

export default App
