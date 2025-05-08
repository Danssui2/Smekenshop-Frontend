import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import { useParams } from "react-router";
import { search } from "../api";
import { useEffect } from "react";
import Loader from "../Components/Loader.jsx";

function Search() {
  const query = useParams().query;
  const cat = useParams().cat;
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSearch = async () => {
    console.log(cat);
    if (cat) {
      const res = await search("", cat);
      console.log(res);
      const listedCard = res?.map((data, i) => {
        return (
          <Card
            key={i}
            img={data?.images[0].link}
            name={data?.product_name}
            seller={data?.seller?.name}
            sellerId={data?.seller?.seller_id}
            price={data?.price}
            id={data?.product_id}
          />
        );
      });
      setCards(cards.concat(listedCard));
      setLoading(false);
    } else {
      const res = await search(query);
      console.log(res);
      const listedCard = res?.map((data, i) => {
        return (
          <Card
            key={i}
            img={data?.images[0].link}
            name={data?.product_name}
            seller={data?.seller?.name}
            sellerId={data?.seller?.seller_id}
            price={data?.price}
            id={data?.product_id}
          />
        );
      });
      setCards(cards.concat(listedCard));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <>
      <Navbar />

      <div className="mt-32 min-h-screen w-screen flex flex-col gap-4 items-center pb-[5rem] md:pb-0">
        <h1 className="font-semibold text-xl md:text-2xl">
          {cat ? `Kategori ${cat}` : `Hasil pencarian dari ${query}`}
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid mt-10 place-items-center gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {cards}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
