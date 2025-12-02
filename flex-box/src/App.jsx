import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <hr />
      <h1 className='container mx-auto text-2xl my-5'>Flex box</h1>

      <div className="flex flex-row bg-red-300">
        <div className="bg-red-500 m-2 p-10"> Box 1</div>
        <div className="bg-red-500 m-2 p-10"> Box 2</div>
        <div className="bg-red-500 m-2 p-10"> Box 3</div>
      </div>
      
      <div className="flex flex-col bg-purple-300 ">
        <div className="bg-purple-700 m-2 p-10"> Box 1</div>
        <div className="bg-purple-700 m-2 p-10"> Box 2</div>
        <div className="bg-purple-700 m-2 p-10"> Box 3</div>
      </div>
      
      <div className="flex flex-row-reverse bg-red-300">
        <div className="bg-red-500 m-2 p-10"> Box 1</div>
        <div className="bg-red-500 m-2 p-10"> Box 2</div>
        <div className="bg-red-500 m-2 p-10"> Box 3</div>
      </div> 

      <div className="flex flex-col-reverse bg-blue-300 ">
        <div className="bg-blue-700 m-2 p-10"> Box 1</div>
        <div className="bg-blue-700 m-2 p-10"> Box 2</div>
        <div className="bg-blue-700 m-2 p-10"> Box 3</div>
      </div>
    </>
  )
}

export default App
