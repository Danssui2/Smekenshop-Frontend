import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Card from "../Components/Card.jsx";
import { getProductsBrief } from "../api.jsx";

function Cart() {
  const [items, setItems] = useState();
  const [listedCard, setlistedCard] = useState([]);

  const cartData = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    setItems(cartData);
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    for (let i = 0; i < cartData.length; i++) {
      const res = await getProductsBrief(cartData[i]?.seller, cartData[i]?.id);
      const lo = (
        <Card
          key={i}
          img={res.images[0]}
          name={res.product_name}
          seller={cartData[i]?.sellerName}
          sellerId={cartData[i]?.seller}
          price={res.price}
          id={res.product_id}
        />
      );
      setlistedCard((listedCard) => [...listedCard, lo]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid gap-x-4 gap-y-8 grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-6">
        {listedCard}
      </div>
      
    </>
  );
}

export default Cart;
