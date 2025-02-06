import React, { useState } from 'react'
import Card from "./Card.jsx"
import datas from "../datas/datas.json"

const Highlighted = () => {
  
  const [data, setdata] = useState(datas)
  console.log(data)
  
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
          
          <Card img={data[0].images[0]} name={data[0].name} author={data[0].owner} price={data[0].price}/>
          <Card img={data[0].images[0]} name={data[0].name} author={data[0].owner} price={data[0].price}/>
          <Card img={data[0].images[0]} name={data[0].name} author={data[0].owner} price={data[0].price}/>
          <Card img={data[0].images[0]} name={data[0].name} author={data[0].owner} price={data[0].price}/>
    
        </div>
      </div>
    </div>
  )
}

export default Highlighted