import logo from "../assets/logo.png";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { Drawer } from "flowbite-react";
import { useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  IoCartOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoSearch,
} from "react-icons/io5";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [queryContent, setqueryContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = "/search/" + queryContent;
  };

  return (
    <>
      <header
        id="navbar"
        className="mb-8 border-b fixed top-0 w-full bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3 md:py-0 z-50">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-xl font-bold text-black md:text-2xl lg:text-3xl"
            aria-label="logo">
            <img src={logo} className="w-9 md:w-16" />
            Ponpin
          </a>
          <nav className="hidden gap-8 xl:flex 2xl:ml-16">
            <a
              href="/#home"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              Home
            </a>
            <a
              href="/#highlighted"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              Highlight
            </a>
            <a
              href="/#catalog"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              Katalog
            </a>
            <a
              href="/#footer"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
              Tentang
            </a>
          </nav>

          <div className="relative items-center hidden lg:flex">
            <GoSearch className="absolute left-3 w- h-6" />
            <form onSubmit={handleSubmit} action="">
              <input
                onChange={(e) => setqueryContent(e?.target?.value)}
                type="text"
                name="search"
                id="search"
                placeholder="Cari Barang..."
                className="rounded-xl  w-44 xl:w-72 p-2 ps-10"
              />
            </form>
          </div>

          <div className="flex divide-x border-r sm:border-l">
            <button
              onClick={() => setIsOpenSearch(!isOpenSearch)}
              className="hidden md:flex lg:hidden h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <GoSearch className="w-5 h-5" />

              <span className="hidden text-xs font-semibold text-gray-500 md:block">
                Cari
              </span>
            </button>

            <a
              href="#helpform"
              className="hidden md:flex h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <BsWhatsapp />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Bantuan
              </span>
            </a>

            <a
              href="/cart"
              className="hidden md:flex h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <IoCartOutline />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </a>

            <a
              href="/account"
              className="hidden md:flex h-12 w-12 flex-col text-black items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <FaRegUser />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Akun
              </span>
            </a>

            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              type="button"
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 xl:hidden">
              <AiOutlineMenu />

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="fixed flex md:hidden justify-center w-screen z-40 bottom-0 shadow-xl">
        <div className="flex w-[90%] py-2 text-xl bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg rounded-2xl mb-5 px-6">
          <div className="flex w-full justify-evenly items-center">
            <a
              href="/"
              className="flex items-center flex-col gap-1 justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
              <IoHomeOutline />
              <span className="block text-xs pb-1">Home</span>
            </a>
          </div>
          <div
            onClick={() => setIsOpenSearch(!isOpenSearch)}
            className="flex w-full justify-evenly items-center">
            <span className="flex items-center flex-col gap-1 justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
              <IoSearch />
              <span className="block text-xs pb-1">Cari</span>
            </span>
          </div>
          <div className="flex w-full justify-evenly items-center">
            <a
              href="/cart"
              className="flex items-center flex-col gap-1 justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
              <IoCartOutline />
              <span className="block text-xs pb-1">Cart</span>
            </a>
          </div>
          <div className="flex w-full justify-evenly items-center">
            <a
              href="/account"
              className="flex items-center flex-col gap-1 justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
              <IoPersonOutline />
              <span className="block text-xs pb-1">Akun</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Drawer
        open={isOpenMenu}
        className="bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        onClose={() => setIsOpenMenu(false)}
        position="right">
        <div className="pt-10 md:pt-20">
          <Drawer.Header title="" />
          <Drawer.Items>
            <nav className="flex flex-col gap-5">
              <a
                href="/#home"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                Home
              </a>
              <a
                href="/#highlighted"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                Highlight
              </a>
              <a
                href="/#catalog"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                Katalog
              </a>
              <a
                href="/#footer"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                Tentang
              </a>
            </nav>
          </Drawer.Items>
        </div>
      </Drawer>

      <Drawer
        open={isOpenSearch}
        onClose={() => setIsOpenSearch(false)}
        position="top">
        <div className="pt-10 md:pt-20 w-full">
          <Drawer.Header title="" />
          <Drawer.Items>
            <div className="relative items-center w-full flex">
              <GoSearch className="absolute left-3 w- h-6" />
              <form onSubmit={handleSubmit} action="">
                <input
                  onChange={(e) => setqueryContent(e?.target?.value)}
                  type="text"
                  name="search"
                  id="search2"
                  placeholder="Cari Barang..."
                  className="lg:hidden rounded-xl w-80 p-2 ps-10"
                />
              </form>
            </div>
          </Drawer.Items>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
