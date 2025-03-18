import React from 'react'
import heroimg1 from "../assets/heroimg1.jpg"
import heroimg2 from "../assets/heroimg2.jpg"

const Hero = () => {
  return (
    <div id="home" className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <section className="mx-auto mt-[25%] lg:mt-[8%] max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 flex flex-wrap justify-between md:mb-16">
          <div className="mb-12 flex w-full flex-col justify-center md:items-start sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-32">
            <p className='text-left mb-1'>Smekenshop.</p>
            <h1 className="mb-4 text-[40px] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-black/50 to-indigo-400 text-left md:mb-8 md:text-5xl">Marketplace For<br /><span className='text-5xl bg-clip-text text-transparent uppercase font-extrabold bg-gradient-to-r from-indigo-700 to-indigo-400'>Smekensa!</span></h1>
            <p className="mb-8 leading-relaxed text-left text-gray-500 xl:text-lg">Sebuah platfrom untuk memfasilitasi Siswa-Siswi, Guru, Karyawan, Staff SMKN 1 Blitar untuk saling jual beli, dan menjadi pasar online yang aktif dan bermanfaat bagi semua.</p>
            <a href="#highlighted"><button className="bg-indigo-600 w-full text-white rounded-xl p-2 text-xl md:w-64">Lihat Produk</button></a>
          </div>
    
          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-2xl shadow-indigo-400 md:left-16 md:top-16 lg:ml-0">
              <img src={heroimg1} loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
            </div>
    
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-2xl shadow-indigo-400">
              <img src={heroimg2} loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero