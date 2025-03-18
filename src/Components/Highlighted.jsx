import React, { useState } from 'react'
import Card from "./Card.jsx"
import datas from "../datas/datas.json"
import { useEffect } from 'react'
import { getHighlight } from '../api.jsx'

const Highlighted = () => {

  let cardsamount = 6

  const [data, setdata] = useState([])
  const [cards, setcards] = useState([])
  const [indexCard, setindexCard] = useState(0)

  const loadCards = () => {
    let listCards = data?.slice(indexCard - cardsamount, indexCard).map(function (data) {
      return <Card key={data.product_id} img={data.images[0].link} seller={data.seller.name} name={data.product_name} sellerId={data.seller.seller_id} price={data.price} id={data.product_id} />
    })
    console.log(indexCard-cardsamount)
    setcards(cards.concat(listCards))
    setindexCard(indexCard + cardsamount)
  }

  const fetchHL = async () => {
    const highlightedProduct = await getHighlight()
    setdata(highlightedProduct)
  }

  useEffect(() => {
    fetchHL()
  }, [])
  useEffect(() => {
    loadCards()
  }, [data])
  

  return (
    <div id="highlighted" className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl flex flex-col items-center px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-1 text-center text-3xl uppercase font-bold text-gray-800 lg:text-3xl">Highlighted</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Barang Pilihan, Diupdate setiap saat!
          </p>
        </div>

        <div className="grid place-items-center gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {cards}

        </div>
        <button onClick={() => {loadCards()}} className="inline-block mt-6 rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Muat Lebih banyak</button>
      </div>
    </div>
  )
}

export default Highlighted