import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='container mx-auto text-2xl my-5'>Container</h1>
      
      <div className="container bg-red-300 mx-auto p-4 my-4 text-red-900 border-red-600 border-2">
        <p>O texto do container</p>
      </div>

      <div className="container bg-red-300 md:bg-green-800 mx-auto p-4 my-4 text-red-900 border-red-600 border-2">
        <p>container com breaking point</p>
      </div>



      <hr />
      <h1 className='container mx-auto text-2xl my-5'>Box Model</h1>
      
      <div className="container box-border bg-purple-700 m-10 p-10 border-2">
        Box border size = size - (padding + border)
      </div>

      <div className="container box-content bg-green-700 m-10 p-10 border-2">
        Box box-content size = size + (padding + border)
      </div>

      
      <hr />
      <h1 className='container mx-auto text-2xl my-5'>Display in-line vs Display block</h1>
      
      <div className="container mx-auto py-1">
        <span className="block bg-red-300 border-2">Span in block</span>
        <span className="block bg-red-300 border-2">Span in block 2</span>
        <div className="inline-block border-2 bg-blue-500">Div in-line</div>
        <div className="inline-block border-2 bg-blue-500">Div in-line 2</div>
        <div className="border-2 bg-blue-500 hidden"></div>
      </div>

      <h1 className='container mx-auto text-2xl my-5'>Float</h1>
      <div className="bg-gray-500 float-right">Float Right</div>
      <div className="bg-gray-700 float-left">Float Left</div>
      <div className="clear-both"></div>
      <div className="bg-gray-500 float-right">Float Right</div>
      <div className="bg-gray-700 float-left">Float Left</div>
      <div className="clear-both"></div>

      <hr />
      <h1 className='container mx-auto text-2xl my-5'>Overflow</h1>

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

      <hr />
      <h1 className='container mx-auto text-2xl my-5'>Position</h1>
      
      <div className="relative bg-gray-300 h-40 w-40">
        <div className="absolute top-0 left-0 bg-gray-700 text-white p-2">Absolute Top Left</div>
        <div className="absolute bottom-0 right-0 bg-gray-700 text-white p-2">Absolute Bottom Right</div>
        <div className="relative bg-gray-500 text-white p-2 top-10 left-10">Relative Top 10 Left 10</div>
      </div>

      <hr />
      <h1 className='container mx-auto text-2xl my-5'>Visible vs Display</h1>
      <div className="container mx-auto">
        <div className="visible bg-red-300 border-2">div visible</div>
        <div className="invisible bg-red-300 border-2 p-5">div invisible My size still counts</div>
        <div className="border-2 bg-blue-500">Div display</div>
        <div className="border-2 bg-blue-500 hidden p-10 my-10">Div hidden My size does not count</div>
      </div>
    </>
  )
}

export default App
