import React from "react";
import { logout } from "../api";
import Navbar from "../Components/Navbar";

function LogOut() {
  return (
    <>
      <Navbar />
      <div className="bg-white py-6 sm:py-8 lg:py-12 w-screen h-screen flex items-center justify-center">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="">
            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
              <p className="mb-1 text-sm font-semibold uppercase text-indigo-500 md:text-base">
                Waduhhh
              </p>
              <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
                Yakin Mau Logout?
              </h1>

              <nav className="flex sm:block sm:space-y-1 md:space-y-2">
                <button
                  onClick={() => logout()}
                  className="rounded-lg mr-4 bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                  Iya
                </button>
                <a
                  href="/account"
                  className="rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                  Tidak, Kembali saja
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogOut;
