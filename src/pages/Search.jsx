import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import { useParams } from "react-router";
import { search } from "../api";
import { useEffect } from "react";

function Search() {
  const query = useParams().query;
  const [cards, setCards] = useState([]);

  const fetchSearch = async () => {
    const res = await search(query);
    console.log(res);
    const listedCard = res?.map((data, i) => {
      return (
        <Card
          key={i}
          img={data.images[0].link}
          name={data.product_name}
          seller={data.seller.seller_id}
          sellerId={data.seller.seller_id}
          price={data.price}
          id={data.product_id}
        />
      );
    });
    setCards(cards.concat(listedCard));
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <>
      <Navbar />

      <div className="mt-32 min-h-screen w-screen flex flex-col items-center">
        <h1 className="font-semibold text-xl md:text-2xl">
          Hasil Pencarian Dari: {query}
        </h1>
        <div className="grid mt-14 place-items-center gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards}
        </div>
      </div>
    </>
  );
}

export default Search;
