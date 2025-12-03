import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-black text-3xl font-bold underline">
        Hello world!
      </h1>

      <h1 className="text-red-500 text-3xl font-bold underline">
        Hello world!
      </h1>
      
      <h1 className="tablet:text-red-500 text-3xl font-bold laptop:underline">
        Hello world!
      </h1>
      
      <h1 className="text-midnight text-3xl font-bold">
        Hello world!
      </h1>
      
      <h1 className="text-midnight text-3xl font-bold m-7.7">
        Hello world!
      </h1>
    </>
  )
}

export default App
