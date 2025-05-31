import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Components/Navbar.jsx";
import Card from "../Components/Card.jsx";
import { TbBrandWechat } from "react-icons/tb";
import { getSellerInfo, getProductsBrief } from "../api.jsx";
import { HashLoader } from "react-spinners";
import { FaHeart } from "react-icons/fa6";
import Loader from "../Components/Loader.jsx";

function Seller() {
  const sellerid = useParams().id;

  const [userData, setUserData] = useState();
  const [productList, setProductList] = useState([]);
  const [listedCard, setlistedCard] = useState([]);
  const [isloadingproduct, setisloadingproduct] = useState(true);

  const fetchUser = async () => {
    const response = await getSellerInfo(sellerid);
    setUserData(response);
  };

  const fetchProduct = async () => {
    for (let i = 0; i < userData?.products.length; i++) {
      const res = await getProductsBrief(userData?.id, userData?.products[i]);
      console.log(res.status)
      setProductList(productList.push(res));
      if (res.status === "approved") {
        const lo = (
          <Card
            key={i}
            img={res.images[0].link}
            name={res.product_name}
            seller={userData?.name}
            sellerId={userData?.id}
            price={res.price}
            id={res.product_id}
          />
        );
        setlistedCard((listedCard) => [...listedCard, lo]);
        setisloadingproduct(false);
        if (i === userData?.products.length - 1) {
        }
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [userData]);

  return (
    <>
      <Navbar />

      {userData ? (
        <div className="bg-white w-screen px-[4%] py-6 pt-24 md:pt-32 pb-[6rem] md:pb-0">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-500 bg-gray-200 shadow-lg">
                  <img
                    src={userData?.profile_photo}
                    loading="lazy"
                    alt="Profile"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="mb-1 text-sm font-semibold uppercase text-indigo-500 md:text-base">
                      {userData?.instance} {userData?.asal_sekolah} {userData?.jurusan == '-' ? '' : `- ${userData?.jurusan}`}
                    </p>
                    <h1 className="mb-2 text-center text-4xl font-bold text-gray-800 sm:text-left md:text-4xl">
                      {userData?.name}
                    </h1>

                    <div className="md:mb-6 mb-1 flex items-center gap-3">
                      <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 p-4 text-white">
                        <TbBrandWechat />
                        <span className="text-sm">
                          {userData?.statistics.total_interaction}
                        </span>
                        <span>Interaksi</span>
                      </div>
                      <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 p-4 text-white">
                        <FaHeart />
                        <span className="text-sm">
                          {userData?.statistics.total_like}
                        </span>
                        <span>Suka</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={
                    "https://wa.me/" +
                    userData.whatsapp +
                    "?text=" +
                    "Hai, saya lihat profil anda dari smekenshop!"
                  }
                  target="__blank"
                  className="inline-block flex-1 md:ml-20 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                  Chat Penjual
                </a>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-4 w-full justify-center">
                {isloadingproduct ? <Loader /> : listedCard}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader fullscreen={true} />
      )}
    </>
  );
}

export default Seller;
