import React from 'react'
import logo from '../assets/logo.png'
import { BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  return (
    <div id="footer" className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">

            <div className="mb-4 lg:-mt-2">
              <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                <img src={logo} className="w-12 lg:w-16" />
                Ponpin
              </a>
            </div>

            <p className="mb-6 text-gray-500 sm:pr-8">Hadir sebagai jawaban atas tantangan belanja daring di lingkungan SMKN 1
              Blitar yang sebelumnya mengandalkan grup WhatsApp, di mana penawaran
              produk kerap kali tenggelam di antara banyaknya pesan. Aplikasi e-commerce
              terstruktur ini memudahkan siswa, guru, dan karyawan SMKN 1 Blitar untuk
              menemukan kebutuhan mereka. Kami memanfaatkan teknologi bot dan
              algoritma cerdas untuk pencarian yang cepat dan rekomendasi personal.
              Ponpin bertekad menciptakan ekosistem belanja daring yang aman,
              personal, dan edukatif bagi warga SMKN 1 Blitar dan sekitarnya.</p>

            <div className="flex gap-4">
              <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <BsWhatsapp />
              </a>

            </div>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Produk</div>

            <nav className="flex flex-col gap-4">
              <div>
                <a href="#highlighted" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Highlighted</a>
              </div>

              <div>
                <a href="#catalog" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Katalog</a>
              </div>

              <div>
                <a href="#highlighted" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Semua Produk</a>
              </div>

            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Bantuan</div>

            <nav className="flex flex-col gap-4">
              <div>
                <a href="#helpform" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cara Penggunaan</a>
              </div>

              <div>
                <a href="#helpform" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Whatsapp Admin</a>
              </div>

            </nav>
          </div>

          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Berjualan</div>

            <nav className="flex flex-col gap-4">
              <div>
                <a href="/account" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Mulai Menjual</a>
              </div>

              <div>
                <a href="/account" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Akun Saya</a>
              </div>

            </nav>
          </div>
        </div>

        <div className="border-t py-8 text-center text-sm text-gray-400">© 2025 Ponpin by Marga Bakti Teknologi. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default Footer