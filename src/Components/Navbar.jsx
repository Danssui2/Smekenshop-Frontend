import logoStm from '../assets/logostm.png'
import { BsWhatsapp } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa6"

function Navbar() {
  return(
    <>
      <header class="mb-8 border-b fixed top-0 w-full bg-white py-3 md:py-0 z-50">
        <div class="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
            <img src={logoStm} class="w-12 lg:w-16" />
            Smekenshop
          </a>
          <nav class="hidden gap-12 lg:flex 2xl:ml-16">
            <a href="#home" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
            <a href="#highlighted" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Highlight</a>
            <a href="#catalog" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Katalog</a>
            <a href="#footer" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Tentang</a>
          </nav>
           
          <div class="flex divide-x border-r sm:border-l">
            <a href="#" class="flex h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <BsWhatsapp/>
    
              <span class="hidden text-xs font-semibold text-gray-500 sm:block">Bantuan</span>
            </a>
            
            <a href="#" class="flex h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <FaRegUser/>
    
              <span class="hidden text-xs font-semibold text-gray-500 sm:block">Berjualan</span>
            </a>
    
            <button type="button" class="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
    
              <span class="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar