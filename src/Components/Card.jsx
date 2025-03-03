import React, {
  useState
} from 'react'

const Card = ({ img, name, seller, price, id }) => {

  const rupiah = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(price)

  return (
    <>
      <a href={'http://localhost:5173/product/' + id}>
        <div className="group relative block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src={img} loading="lazy" alt="Foto Produk" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>


        <div className="flex flex-col items-start justify-between bg-slate-100 p-3 rounded-b-xl pb-5">
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{name}</p>
            <span className="text-gray-600 mt-1">{seller}</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 mt-1">{rupiah}</span>
          </div>
        </div>
      </a>
    </>
  )
}

export default Card