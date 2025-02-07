import React, { useState } from 'react'
import Card from "./Card.jsx"
import datas from "../datas/datas.json"

const Highlighted = () => {
  
  const [data, setdata] = useState(datas)
  console.log(data)

  let listCards = datas.map(function(data) {
    return  <Card img={data.images} name={data.name} seller={data.seller.name} price={data.price}/>
  })
  
  return (
    <div id="highlighted" class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Highlighted</h2>
    
          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Barang Pilihan, Diupdate setiap saat!
          </p>
        </div>
    
        <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          
          {listCards}
    
        </div>
      </div>
    </div>
  )
}

export default Highlighted