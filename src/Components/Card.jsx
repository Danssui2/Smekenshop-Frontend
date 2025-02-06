import React, {
  useState
} from 'react'

const Card = ({img, name, author, price}) => {
  return (
    <div>
      <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
        <img src={img} loading="lazy" alt="Foto Produk" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    </a>

    <div class="flex items-start justify-between gap-2 px-2">
      <div class="flex flex-col">
        <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{name}</a>
        <span class="text-gray-500">{author}</span>
      </div>

      <div class="flex flex-col items-end">
        <span class="font-bold text-gray-600 lg:text-lg">{price}</span>
      </div>
    </div>
  </div>
)
}

export default Card