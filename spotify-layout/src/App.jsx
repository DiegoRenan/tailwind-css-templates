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
              <i className="fas fa-bars"></i>
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
      <main className="flex flex-col justify-center text-center bg-spotify-theme-mobile md:bg-spotify-theme md:bg-position 
      md:bg-position-[46%_4%] bg-position-[top_25%_center]  bg-size-[195%] md:bg-size-[175%] bg-spotify-purple text-spotify-green py-40 px-4">
        <div>
          <h1 className='text-5xl md:text-9xl mb-10 font-bold max-w-4xl mx-auto leading-none'>Escutar muda tudo</h1>
          <p className='text-md md:text-lg mb-10'>Milhoes de musicas e podcasts para explorar. E nem precisa de cartao de credito.</p>
          <a href="#" className='bg-spotify-green hover:bg-white text-spotify-purple text-sm rounded-full uppercase max-w-xl mx-auto px-10 py-3 tracking-widest transition duration-500'>Obtenha o Spotify Free</a>
        </div>
      </main>
    </>
  )
}

export default App
