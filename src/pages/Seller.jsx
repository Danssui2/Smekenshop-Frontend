import React from 'react'
import { useParams } from 'react-router'
import seller from '../datas/seller.json'

function Seller() {
  const prodIds = useParams().id
  const prodData = seller[prodIds]
  console.log(prodData)

  return (
    <div>
        
    </div>
  )
}

export default Seller