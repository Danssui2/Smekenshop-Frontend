import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import seller from "../datas/seller.json";
import Navbar from "../Components/Navbar.jsx";
import Card from "../Components/Card.jsx";
import { HiOutlineEye } from "react-icons/hi";
import { TbBrandWechat } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { getUserInfo, getProductsBrief } from "../api.jsx";
import { HashLoader } from "react-spinners";

function Account() {
  const [userData, setUserData] = useState();
  const [productList, setProductList] = useState([]);
  const [listedCard, setlistedCard] = useState([]);

  const token = JSON.parse(localStorage.getItem("userToken"))

  const fetchUser = async () => {
    const response = await getUserInfo(token);
    setUserData(response);
    console.log(response)
    if (response.role === "admin") {
      localStorage.setItem("XYZABC_SUPER", "SMEKENSA65")
      window.location = "/administration";
    }
  };

  const fetchProduct = async () => {
    for (let i = 0; i < userData?.products.length; i++) {
      const res = await getProductsBrief(userData?.id, userData?.products[i]);
      setProductList(productList.push(res));
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
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      console.log("token exist");
      fetchUser();
    } else {
      console.log("token not exist");
      window.location = "/login";
    }
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [userData]);

  return (
    <>
      <Navbar />

      {userData ? (
        <div className="bg-white w-screen px-[4%] py-6 pt-24 md:pt-32">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
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
                      {userData?.instance}
                    </p>
                    <h1 className="mb-2 text-center text-4xl font-bold text-gray-800 sm:text-left md:text-4xl">
                      {userData?.name}
                    </h1>

                    <div className="md:mb-6 mb-1 flex items-center gap-3">
                      <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 p-4 text-white">
                        <TbBrandWechat />
                        <span className="text-sm">
                          {userData?.total_interaction}
                        </span>
                        <span>interactions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a
                  href={
                    "https://wa.me/" +
                    "+62881036490338" +
                    "?text=" +
                    "Hai, saya lihat profil anda dari smekenshop!"
                  }
                  className="inline-block flex-1 md:ml-20 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                  Chat Penjual
                </a> */}
              </div>
              <div className="flex gap-4">
                <a
                  href="/post"
                  className="flex items-center rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                  Edit Profil
                </a>
                <a
                  href="/post"
                  className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                  Jual Produk Baru
                </a>
              </div>
              <a
                href="/logout"
                className="inline-block flex-1 md:w-40 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                Logout
              </a>
              <div className="grid gap-x-4 gap-y-8 grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-6">
                {listedCard}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">
          <HashLoader size={75} color="blue" />
        </div>
      )}
    </>
  );
}

export default Account;
