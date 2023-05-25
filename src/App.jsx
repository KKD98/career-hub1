import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-red-700 text-center text-4xl'>Hello</h1>
      <button className="btn btn-secondary">Button</button>
    </div>
  )
}

export default App
