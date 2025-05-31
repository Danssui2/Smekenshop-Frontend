import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { HashLoader } from "react-spinners";
import ProductOwner from "../Components/ProductOwner";

function Products() {
  const [data, setdata] = useState()
  const [sellerData, setSellerData] = useState()
  const prodIds = useParams().id;
  const sellerIds = useParams().seller;

  const savedSellerID = localStorage.getItem("seller_id");

  const fetchData = async () => {
    const datas = await getProducts(sellerIds, prodIds)
    setdata(datas[0])
    setSellerData(datas[1])
    console.log(datas)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      {data && sellerData ? (
      <div className="bg-white mt-20 py-3 sm:py-8 lg:py-12">
        {sellerIds === savedSellerID ? (
          <ProductOwner
            name={data?.product_name}
            category={data?.category}
            img={data?.images}
            price={data?.price}
            desc={data?.description}
            seller={sellerData}
            view={data?.view}
            interaction={data?.interaction}
            like={data?.like}
            id={data?.product_id}
            status={data?.status}
            stock={data?.stock}
            messages={data?.message}
            isdisabled={data?.is_disabled}
          />
        ) : (
          <Product
            name={data?.product_name}
            category={data?.category}
            img={data?.images}
            price={data?.price}
            desc={data?.description}
            seller={sellerData}
            view={data?.view}
            interaction={data?.interaction}
            like={data?.like}
            id={data?.product_id}
            stock={data?.stock}
            status={data?.status}
            owner_role={sellerData?.role}
          />
        )}
      </div>
      ): <div className='w-screen h-screen flex items-center justify-center'><HashLoader size={75} color='blue'/></div>}
    </>
  );
}

export default Products;
