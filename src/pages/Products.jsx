import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { HashLoader } from "react-spinners";

const dummy = {
  "ok": true,
  "status_code": 200,
  "message": "Berhasil!",
  "result": {
    "product_id": "mLMDhRXNDz",
    "product_name": "kucay tohapok",
    "description": "<p>anak kucayyy</p>",
    "price": "10000",
    "category": "Makanan",
    "images": [
      {
        "file_id": "10JTQqlbpt1hpcyuN0GzTmFgqgvwDQkra",
        "file_name": "product-A2S1K5vVRJ0JJGur2Yxl",
        "link": "https://drive.google.com/uc?id=10JTQqlbpt1hpcyuN0GzTmFgqgvwDQkra&export=download"
      },
      {
        "file_id": "1cKbgyjMQhpPfO1uTC0wvW3xH4MtE8RL7",
        "file_name": "product-fxWBhwwZ3PRL4i93R0pL",
        "link": "https://drive.google.com/uc?id=1cKbgyjMQhpPfO1uTC0wvW3xH4MtE8RL7&export=download"
      },
      {
        "file_id": "17wfBWjFugQ009aJ4m_J3pwHIMI1micLT",
        "file_name": "product-Cfe8sBMrsJHuqEJaqeXg",
        "link": "https://drive.google.com/uc?id=17wfBWjFugQ009aJ4m_J3pwHIMI1micLT&export=download"
      }
    ],
    "like": 0,
    "view": 0,
    "interaction": 0,
    "release_date": "05/03/25",
    "seller": {
      "seller_id": "1apj9"
    }
  }
}


function Products() {
  const [data, setdata] = useState()
  const [sellerData, setSellerData] = useState()
  const prodIds = useParams().id;
  const sellerIds = useParams().seller;

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
        />
      </div>
      ): <div className='w-screen h-screen flex items-center justify-center'><HashLoader size={75} color='blue'/></div>}
    </>
  );
}

export default Products;
