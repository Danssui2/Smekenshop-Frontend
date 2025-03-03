import React from 'react'
import heroimg1 from "../assets/heroimg1.jpg"
import heroimg2 from "../assets/heroimg2.jpg"

const Hero = () => {
  return (
    <div id="home" className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <section className="mx-auto mt-[25%] lg:mt-[8%] max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center items-center md:items-start sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-32">
            <h1 className="mb-4 text-4xl font-bold text-black text-center md:text-left sm:text-5xl md:mb-8 md:text-6xl">Jual-Beli di<br />Smekensa!</h1>
            <p className="max-w-md leading-relaxed text-center md:text-left text-gray-500 xl:text-lg">Sebuah platfrom untuk memfasilitasi Siswa-Siswi, Guru, Karyawan, Staff SMKN 1 Blitar untuk saling jual beli, dan menjadi pasar online yang aktif dan bermanfaat bagi semua.</p>
            <a href="#highlighted"><button className="bg-blue-700 mt-4 text-white w-56 rounded-3xl p-2 text-xl">Lihat Produk</button></a>
          </div>
    
          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img src={heroimg1} loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
            </div>
    
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src={heroimg2} loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero