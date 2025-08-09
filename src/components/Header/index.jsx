import { Link } from '@tanstack/react-router'
import logo from '../../assets/logo.svg'
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-background">
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
          <Link
            to="/signup"
            className="px-4 py-2 text-white font-semibold text-xl hover:underline"
          >
            CRIAR UMA CONTA
          </Link>
          <Link
            to="/series"
            className="px-4 py-2 text-white font-semibold text-xl hover:underline"
          >
            SÉRIES
          </Link>
          <Link
            to="/animations"
            className="px-4 py-2 text-white font-semibold text-xl hover:underline"
          >
            DESENHOS
          </Link>
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
