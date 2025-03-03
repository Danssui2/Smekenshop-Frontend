import logoStm from '../assets/logostm.png'
import { BsWhatsapp } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa6"
import { GoSearch } from 'react-icons/go'
import { Drawer } from 'flowbite-react'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="mb-8 border-b fixed top-0 w-full bg-white py-3 md:py-0 z-50">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
            <img src={logoStm} className="w-12 lg:w-16" />
            Smekenshop
          </a>
          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            <a href="http://localhost:5173/#home" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
            <a href="http://localhost:5173/#highlighted" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Highlight</a>
            <a href="http://localhost:5173/#catalog" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Katalog</a>
            <a href="http://localhost:5173/#footer" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Tentang</a>
          </nav>

          <div className='relative items-center hidden md:flex'>
            <GoSearch className='absolute left-3 w- h-6' />
            <input type="text" name="search" id="search" placeholder='Cari Barang' className='rounded-xl w-44 xl:w-72 p-2 ps-10' />
          </div>

          <div className="flex divide-x border-r sm:border-l">
            <a href="#" className="flex md:hidden h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <GoSearch className='w-5 h-5' />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cari</span>
            </a>

            <a href="#" className="hidden md:flex h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <BsWhatsapp />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">Bantuan</span>
            </a>

            <a href="#" className="flex h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <FaRegUser />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">Berjualan</span>
            </a>

            <button onClick={() => setIsOpen(!isOpen)} type="button" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
              <AiOutlineMenu />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
            </button>
          </div>
        </div>
      </header>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)} position="left">
        <div className='pt-10'>
          <Drawer.Header title="" />
          <Drawer.Items>
            <nav className="flex flex-col gap-5">
              <a href="http://localhost:5173/#home" className="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
              <a href="http://localhost:5173/#highlighted" className="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Highlight</a>
              <a href="http://localhost:5173/#catalog" className="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Katalog</a>
              <a href="http://localhost:5173/#footer" className="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Tentang</a>
            </nav>
          </Drawer.Items>
        </div>
      </Drawer>

    </>
  )
}

export default Navbar