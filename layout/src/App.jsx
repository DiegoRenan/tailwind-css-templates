import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Container</h1><hr />
      <div className="container bg-red-300 mx-auto p-4 my-4 text-red-900 border-red-600 border-2">
        <p>O texto do container</p>
      </div>

      <div className="container bg-red-300 md:bg-green-800 mx-auto p-4 my-4 text-red-900 border-red-600 border-2">
        <p>container com breaking point</p>
      </div>

      <h2>Box Model</h2><hr />
      <div className="container box-border bg-purple-700 m-10 p-10 border-2">
        Box border size = size - (padding + border)
      </div>

      <div className="container box-content bg-green-700 m-10 p-10 border-2">
        Box box-content size = size + (padding + border)
      </div>

      <h2>Display in-line vs Display block</h2><hr />
      <div className="container mx-auto py-1">
        <span className="block bg-red-300 border-2">Span in block</span>
        <span className="block bg-red-300 border-2">Span in block 2</span>
        <div className="inline-block border-2 bg-blue-500">Div in-line</div>
        <div className="inline-block border-2 bg-blue-500">Div in-line 2</div>
        <div className="border-2 bg-blue-500 hidden"></div>
      </div>

      <h2>Float</h2><hr />
      <div className="bg-gray-500 float-right">Float Right</div>
      <div className="bg-gray-700 float-left">Float Left</div>
      <div className="clear-both"></div>
      <div className="bg-gray-500 float-right">Float Right</div>
      <div className="bg-gray-700 float-left">Float Left</div>

      <h2>Overflow</h2>
      <hr />

      <div className="w-40 h-40 bg-yellow-300 overflow-auto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="w-40 h-40 overflow-y-auto bg-yellow-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      <div className="w-100 h-40 overflow-auto bg-yellow-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </>
  )
}

export default App
