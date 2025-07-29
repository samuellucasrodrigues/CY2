import { Link } from '@tanstack/react-router'
import logo from '../../assets/logo.svg'
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-[#000]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="ml-[84px]">
          <img src={logo} alt="logo" />
        </a>
        <nav className="flex space-x-15 mr-[174px] items-center">
          <Link
            to="/login"
            className="px-4 py-2 text-white font-normal text-xl hover:underline "
          >
            ENTRAR
          </Link>
          <a
            href="#"
            className="px-4 py-2 text-white font-semibold text-xl hover:underline"
          >
            CRIAR UMA CONTA
          </a>
          <a
            href="#"
            className="px-4 py-2 text-white font-semibold text-xl hover:underline"
          >
            SÉRIES
          </a>
          <a
            href="#"
            className="px-4 py-2 text-white font-semibold text-xl hover:underline"
          >
            DESENHOS
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              className="pl-2 pr-8 py-1 rounded-2xl bg-gray-700 text-sm focus:outline-none text-white"
            />
            <span className="absolute right-2 text-white">
              <Search />
            </span>
          </div>
        </nav>
      </div>
    </header>
  )
}
