import React from 'react'

const CardCatalog = ({img, category}) => {
  return (
    <div>
      <a href={`/search/category/${category}`} className="group relative flex w-40 h-64 md:h-96 md:w-64 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src={img} loading="lazy" alt="Foto Kategori" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
          <span className="text-lg font-bold text-gray-800 lg:text-xl">{category}</span>
        </div>
      </a>
    </div>
  ) 
}

export default CardCatalog