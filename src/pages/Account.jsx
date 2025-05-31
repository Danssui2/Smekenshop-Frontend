import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import CardOwner from "../Components/CardOwner.jsx";
import { TbBrandWechat } from "react-icons/tb";
import { getUserInfo, getProductsBrief } from "../api.jsx";
import { HashLoader } from "react-spinners";
import { FaHeart } from "react-icons/fa6";
import Loader from "../Components/Loader.jsx";
import { Accordion } from "flowbite-react";

function Account() {
  const [userData, setUserData] = useState();
  const [productList, setProductList] = useState([]);
  const [aprovedCard, setAprovedCard] = useState([]);
  const [pendingCard, setPendingCard] = useState([]);

  const token = JSON.parse(localStorage.getItem("userToken"));

  const fetchUser = async () => {
    const response = await getUserInfo(token);
    setUserData(response);
    if (response.role === "admin") {
      localStorage.setItem("XYZABC_SUPER", "SMEKENSA65");
      window.location = "/admin";
    }
  };

  const fetchProduct = async () => {
    for (let i = 0; i < userData?.products.length; i++) {
      const res = await getProductsBrief(userData?.id, userData?.products[i]);
      setProductList(productList.push(res));
      const lo = (
        <div className="flex items-center flex-col" key={i}>
          <CardOwner
            key={i}
            img={res?.images[0]?.link}
            name={res.product_name}
            seller={userData?.name}
            sellerId={userData?.id}
            price={res.price}
            id={res.product_id}
            status={res.status}
          />
          {res?.status == "approved" ? (
            <span className="flex w-full h-10 font-semibold items-center justify-center bg-green-500 text-white">
              Disetujui
            </span>
          ) : res?.status == "pending" ? (
            <span className="flex w-full h-10 font-semibold items-center justify-center bg-yellow-300 text-white">
              Ditinjau
            </span>
          ) : res?.status == "rejected" ? (
            <span className="flex w-full h-10 font-semibold items-center justify-center bg-red-500 text-white">
              Ditolak
            </span>
          ) : res?.status == "dropped" ? (
            <span className="flex w-full h-10 font-semibold items-center justify-center bg-red-500 text-white">
              Didrop
            </span>
          ) : null}

        </div>
      );
      if (res.status == "approved") {
        setAprovedCard((aprovedCard) => [...aprovedCard, lo]);
      } else {
        setPendingCard((pendingCard) => [...pendingCard, lo]);
      }
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
        <div className="bg-white w-screen px-[4%] py-6 pt-24 md:pt-32 pb-[8rem] md:pb-0">
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
                      {userData?.instance} {userData?.asal_sekolah} - {userData?.jurusan == '-' ? '' : userData?.jurusan}
                    </p>
                    <h1 className="mb-2 text-center text-4xl font-bold text-gray-800 sm:text-left md:text-4xl">
                      {userData?.name}
                    </h1>

                    <div className="md:mb-6 mb-1 flex items-center gap-3">
                      <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 p-4 text-white">
                        <TbBrandWechat />
                        <span className="text-sm">
                          {userData?.statistics?.total_interaction}
                        </span>
                        <span>interactions</span>
                      </div>
                      <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 p-4 text-white">
                        <FaHeart />
                        <span className="text-sm">
                          {userData?.statistics?.total_like}
                        </span>
                        <span>likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {userData?.role != 'banned' && (
                <div className="flex gap-4">
                  <a
                    href="/account/edit"
                    className="flex items-center rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                    Edit Profil
                  </a>
                  <a
                    href="/post"
                    className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                    Jual Produk Baru
                  </a>
                </div>
              )}
              <a
                href="/logout"
                className="inline-block flex-1 md:w-40 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                Logout
              </a>

              {
                userData?.role != 'banned' ? (
                  <div className="flex flex-col md:mb-10 lg:flex-row lg:gap-6 gap-y-14 w-full">
                    <div className="w-full rounded-xl lg:w-[50%]">
                      <h2 className="text-xl mb-4 font-semibold">Produk Lolos</h2>
                      <div className="md:flex w-full flex-wrap grid grid-cols-2 gap-2 md:gap-4">
                        {aprovedCard != [] ? aprovedCard : <p>Tidak Ada Produk</p>}
                      </div>
                    </div>
                    <div className="w-full rounded-xl lg:w-[50%]">
                      <h2 className="text-xl mb-4 font-semibold">
                        Produk Dalam Peninjauan/banned
                      </h2>
                      <div className="md:flex w-full flex-wrap grid grid-cols-2 gap-2 md:gap-4">
                        {pendingCard != [] ? pendingCard : <p>Tidak Ada Produk</p>}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-[-20px]">
                      Akun Anda telah diblokir. Alasan: {userData?.message}
                    </h2>
                    <p>
                      Akun yang diblokir tidak akan dapat diedit dan semua produk tidak akan dapat diakses.
                    </p>
                  </>
                )
              }
            </div>
          </div>
        </div>
      ) : (
        <Loader fullscreen={true} />
      )}
    </>
  );
}

export default Account;
