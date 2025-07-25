import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import logo from './assets/logo.svg'
import bb from './assets/bb.svg'
import bob from './assets/bob.svg'
import himym from './assets/himym.svg'
import naruto from './assets/naruto.svg'
import pb from './assets/pb.svg'
import st from './assets/st.svg'

function App() {
  return (
    <div className="min-h-screen bg-[#000]">
      {/* Header */}
      <header className="bg-[#000]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className='ml-[84px]'>
            <img src={logo} alt="logo" />
          </a>
          <nav className="flex space-x-20 mr-[174px] items-center">
            <a href="#" className="px-4 py-2 text-white font-normal text-xl hover:underline ">ENTRAR</a>
            <a href="#" className="px-4 py-2 text-white font-semibold text-xl hover:underline">CRIAR UMA CONTA</a>
            <a href="#" className="px-4 py-2 text-white font-semibold text-xl hover:underline">SÉRIES</a>
            <a href="#" className="px-4 py-2 text-white font-semibold text-xl hover:underline">DESENHOS</a>
            <div className="relative">
              <input
                type="text"
                placeholder=""
                className="pl-2 pr-8 py-1 rounded-2xl bg-gray-700 text-sm focus:outline-none text-white"
              />
              <span className="absolute right-2 text-white">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container flex justify-center items-center m-auto flex-col">

        <div className="container flex justify-center items-center m-auto flex-col mt-[150px]">
          <h2 className="text-white font-black text-3xl ">Acompanhe as séries e desenhos que você assistiu.</h2>
          <h2 className="text-white font-black text-3xl ">Salve aqueles que você quer ver.</h2>
          <h2 className="text-white font-black text-3xl ">Conte aos seus amigos o que é bom.</h2>
        </div>

        <a href="#" className="bg-green-600 text-white px-4 py-3 rounded mt-[39px] hover:bg-green-500 font-bold text-xl">
          Comece agora mesmo - é grátis!
        </a>

        <h3 className="text-white mt-[17px] text-xl font-light">A rede social para os amantes de séries e desenhos.</h3>

        <div className="flex gap-[17px] mt-[132px] mb-[121px]">
          <img className="" src={bb} alt="Breaking Bad" />
          <img src={pb} alt="Prison Break" />
          <img src={himym} alt="How I Met Yout Mother" />
          <img src={naruto} alt="Naruto" />
          <img src={bob} alt="Bob Esponja" />
          <img src={st} alt="Stranger Things" />
        </div>
      </main>
    </div>
  );
}

export default App;