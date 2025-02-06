import React from 'react'
import CardCatalog from "./CardCatalog.jsx"

const Katalog = () => {
  return (
    <div id="catalog" class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 class="text-center mb-4 text-2xl font-bold text-gray-800 lg:text-3xl">Katalog</h2>
        <p class="mx-auto mb-10 md:mb-16 max-w-screen-md text-center text-gray-500 md:text-lg">
          Seluruh kategori produk ada disini!
        </p>

        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <CardCatalog img="" category="Food"/>
          <CardCatalog img="" category="Food"/>
          <CardCatalog img="" category="Food"/>
          <CardCatalog img="" category="Food"/>
        </div>
      </div>
    </div>
  )
}

export default Katalog