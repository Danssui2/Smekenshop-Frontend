import { useParams } from "react-router"
import Navbar from "../Components/Navbar"
import Product from "../Components/Product"

function Products() {
  const prodIds = useParams().id

  return (
    <div>
      <Navbar/>
      <div className="bg-white mt-20 py-6 sm:py-8 lg:py-12">
        <Product/>
      </div>
    </div>
  )
}

export default Products
