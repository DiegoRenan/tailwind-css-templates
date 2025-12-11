import { useState } from 'react'
import './assets/css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
          <div className="container flex items-center mx-auto">
            <div><a href="#"><img src="/src/assets/images/spotify-logo.png" alt="Spotify" className="w-20 md:w-spotify-125px" /></a></div>
            <div className="flex justify-end flex-1 text-white text-3xl md:hidden">
              <i className="fas fa-bars bg-red-700"></i>
            </div>
            <div className="items-end flex-1 text-white font-bold hidden md:flex">
              <nav className="flex-1">
                <ul className="flex justify-end flex-1">
                  <li className="px-4"><a className="hover:text-spotify-hover text-sm" href="#">Premium</a></li>
                  <li className="px-4"><a className="hover:text-spotify-hover text-sm" href="#">Ajuda</a></li>
                  <li className="px-4"><a className="hover:text-spotify-hover text-sm" href="#">Baixar</a></li>
                  <li className="px-4"><span className="border-r border-white"></span></li>
                  <li className="px-4"><a className="hover:text-spotify-hover text-sm" href="#">Inscrever-se</a></li>
                  <li className="px-4"><a className="hover:text-spotify-hover text-sm" href="#">Log-in</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
