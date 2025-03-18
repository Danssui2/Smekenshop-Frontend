import React from 'react'
import CardCatalog from "./CardCatalog.jsx"

const Katalog = () => {
  return (
    <div id="catalog" className="bg-white mt-14 pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-1 text-center text-3xl uppercase font-bold text-gray-800 lg:text-3xl">Katalog</h2>
        <p className="mx-auto mb-10 md:mb-16 max-w-screen-md text-center text-gray-500 md:text-lg">
          Seluruh kategori produk ada disini!
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <CardCatalog img="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" category="Makanan"/>
          <CardCatalog img="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" category="Fashion"/>
          <CardCatalog img="https://images.unsplash.com/photo-1519086588705-c935fdedcc14?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" category="Elektronik"/>
          <CardCatalog img="https://plus.unsplash.com/premium_photo-1677009834523-367c2e9b281c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" category="Lainnya"/>
        </div>
      </div>
    </div>
  )
}

export default Katalog