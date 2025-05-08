import React, {
  useState
} from 'react'

const CardOwner = ({ img, name, seller, price, id, sellerId, status }) => {

  const rupiah = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price)

  return (
    <>
      <a className='flex flex-col w-40 md:w-52' href={'/product/edit/' + sellerId + "/" + id}>
        <div className="group relative block w-full h-52 md:h-72 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src={img} loading="lazy" alt="Foto Produk" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div className="flex flex-col items-start justify-between bg-slate-100 p-3 rounded-b-xl pb-5">
          <div className="flex flex-col">
            <p className="text-md font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl w-36 md:w-44 overflow-hidden truncate">{name}</p>
            <span className="text-gray-600 text-sm mt-[1px]">{seller}</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 mt-[2px]">{rupiah}</span>
          </div>
        </div>
      </a>
    </>
  )
}

export default CardOwner