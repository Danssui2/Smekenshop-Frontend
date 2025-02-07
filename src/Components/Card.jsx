import React, {
  useState
} from 'react'

const Card = ({img, name, seller, price}) => {

  const rupiah = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(price)

  return (
    <div> 
      <a href="#" class="group relative block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <img src={img} loading="lazy" alt="Foto Produk" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    </a>

    <div class="flex flex-col items-start justify-between bg-slate-100 p-3 rounded-b-xl pb-5">
      <div class="flex flex-col">
        <a href="#" class="text-lg font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{name}</a>
        <span class="text-gray-600 mt-1">{seller}</span>
      </div>

      <div class="flex flex-col items-end">
        <span class="font-bold text-gray-600 mt-1">{rupiah}</span>
      </div>
    </div>
  </div>
)
}

export default Card