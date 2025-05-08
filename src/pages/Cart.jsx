import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Card from "../Components/Card.jsx";
import { getProductsBrief } from "../api.jsx";
import Loader from '../Components/Loader.jsx'

function Cart() {
  const [listedCard, setlistedCard] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const cartData = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    fetchProduct();
  }, []);

  const handleDelete = (items) => {
    const finded = cartData.findIndex((e) => e.id === items);
    if (finded !== -1) {
      cartData.splice(finded, 1);
      localStorage.setItem("cart", JSON.stringify(cartData));
      window.location.reload();
    }
  };

  const fetchProduct = async () => {
    for (let i = 0; i < cartData.length; i++) {
      const res = await getProductsBrief(cartData[i]?.seller, cartData[i]?.id);
      const lo = (
        <div key={i} className="flex flex-col">
          <Card
            img={res.images[0].link}
            name={res.product_name}
            seller={cartData[i]?.sellerName}
            sellerId={cartData[i]?.seller}
            price={res.price}
            id={res.product_id}
          />
          <div className="flex w-full bg-slate-100">
            <button
              onClick={() => handleDelete(res?.product_id)}
              className="bg-red-500 flex-1 text-white font-semibold rounded-lg p-2 px-4">
              Hapus
            </button>
          </div>
        </div>
      );
      setlistedCard((listedCard) => [...listedCard, lo]);
      if (i === cartData.length - 1) {
        setIsLoading(false)
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="md:mt-32 mt-28 mb-14 flex flex-col pb-[4rem] md:pb-0">
        <h2 className="mb-1 text-center text-3xl uppercase font-bold text-gray-800 lg:text-3xl">
          Keranjang
        </h2>
        <div className="flex w-screen flex-wrap justify-center mt-10 items-center gap-4">
          {cartData == "" ? (
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-center text-xl font-medium text-gray-800 lg">
                Belum ada barang di keranjang
              </h2>
              <a href="/" className="bg-indigo-500 text-white font-medium rounded-lg px-6 p-2 mt-2">Ayo Beli!</a>
            </div>
          ) : (
            isloading ? <Loader /> : listedCard
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
