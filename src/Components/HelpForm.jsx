import React from 'react'

const HelpForm = () => {
  return (
    <div id='helpform' className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
          <div className="mb-4 sm:mb-8 lg:mb-0">
            <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-left lg:text-3xl">Ada kesulitan?, Ada kebingungan?</h2>
            <p className="text-center text-gray-500 lg:text-left">Ayo tanyakan kepada kami!</p>
          </div>
    
          <div className="flex flex-col items-center lg:items-end">
            <form className="mb-3 flex w-full max-w-md gap-2">
              <input placeholder="Pesan" className="bg-gray-white w-full bg-slate-50 flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />
    
              <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Kirim</button>
            </form>
    
            <p className="text-center text-xs text-gray-400 lg:text-right">Dengan menekan tombol kirim kamu setuju bahwa akan menjaga etika ketika berpesan.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpForm