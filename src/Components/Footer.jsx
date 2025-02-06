import React from 'react'
import logoStm from '../assets/logostm.png'
import { BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  return (
    <div id="footer" class="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 lg:pt-12">
          <div class="col-span-full lg:col-span-2">
            
            <div class="mb-4 lg:-mt-2">
              <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                <img src={logoStm} class="w-12 lg:w-16" />
                Smekenshop
              </a>
            </div>
    
            <p class="mb-6 text-gray-500 sm:pr-8">Sebuah platfrom untuk memfasilitasi Siswa-Siswi, Guru, Karyawan, Staff SMKN 1 Blitar untuk saling jual beli, dan menjadi pasar online yang aktif dan bermanfaat bagi semua.</p>
    
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <BsWhatsapp/>
              </a>
    
            </div>
          </div>
    
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Produk</div>
    
            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Highlighted</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Katalog</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Semua Produk</a>
              </div>
    
            </nav>
          </div>
    
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Bantuan</div>
    
            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cara Penggunaan</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Whatsapp Admin</a>
              </div>
              
            </nav>
          </div>
    
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Berjualan</div>
    
            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Mulai Menjual</a>
              </div>
    
              <div>
                <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Akun Saya</a>
              </div>
    
            </nav>
          </div>
        </div>
    
        <div class="border-t py-8 text-center text-sm text-gray-400">© 2025 Smekenshop by Ardans. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default Footer