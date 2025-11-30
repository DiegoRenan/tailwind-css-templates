import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container bg-red-300 mx-auto p-4 my-4 text-red-900 border-red-600 border-2">
          <p>O texto do container</p>
      </div>

      <div className="container bg-red-300 md:bg-green-800 mx-auto p-4 my-4 text-red-900 border-red-600 border-2">
          <p>container com breaking point</p>
      </div>
    </>
  )
}

export default App
